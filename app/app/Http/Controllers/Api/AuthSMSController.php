<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Requests\OTPRequest;
use App\Mail\MailOTP;
use App\Models\User;
use App\Models\UserCode;
use App\Models\VerificationLogin;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Twilio\Rest\Client;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthSMSController extends BaseController
{
    public function __construct()
    {
        $this->user = new User();
    }

    public function username($username)
    {
        if (is_numeric($username)) {
            $field = 'phone';
        } elseif (filter_var($username, FILTER_VALIDATE_EMAIL)) {
            $field = 'email';
        } else {
            $field = 'username';
        }

        return $field;
    }
    public function login(Request $request)
    {
        try {
            $validated = Validator::make($request->all(), [
                'username' => 'required',
                'password' => 'required'
            ]);

            if ($validated->fails()) {
                return $this->failValidator($validated);
            }
            $typeinput = $this->username($request['username']);

            if ($typeinput == "phone") {
                $customer = User::where('phone', $request->username)->latest()->first();
                $credentials = [
                    'password' => $request->password,
                    'phone' => $request->username,
                ];
            } elseif ($typeinput == 'email') {
                $customer = User::where('email', $request->username)->latest()->first();
                $credentials = [
                    'password' => $request->password,
                    'email' => $request->username,
                ];
            } else {
                return $this->badRequest('Tài khoản đăng nhập không hợp lệ!');
            }
            if (!$customer->is_verified) {
                return $this->badRequest('Tài khoản chưa kích hoạt');
            }
            if (!Hash::check($request->password, $customer->password, [])) {
                throw new Exception('Sai thông tin đăng nhập!');
            }
            $token = JWTAuth::attempt($credentials);
            $customer->update(['remember_token' => $token]);
            $verificationOTP = VerificationLogin::where('user_id', $customer->id)->latest()->first();
            $now = Carbon::now();
            if ($verificationOTP && $now->isBefore($verificationOTP->expire_at)) {
                $this->sendOTP($typeinput, $request->username, $verificationOTP->otp);
            } else {
                $otp = rand(100000, 999999);        //  $token= $user->createToken('App')->plainTextToken;
                VerificationLogin::create([
                    'user_id' => $customer->id,
                    'otp' => $otp,
                    'expire_at' => Carbon::now()->addMinutes(5)
                ]);
                $this->sendOTP($typeinput, $request->username, $otp);
            }

            return $this->withData($customer, 'Chúng tôi đã gửi mã xác nhận đến số điện thoại của bạn!', 201);
        } catch (JWTAuthException $e) {
            return $this->errorInternal('Đăng nhập thất bại');
        }
    }
    public function register(Request $request)
    {
        $firt_name = isset($request['first_name']) ? $request['first_name'] : '';
        $last_name = isset($request['last_name']) ? $request['last_name'] : '';
        $name = $firt_name . ' ' . $last_name;
        $request['name'] = $name;
        $validated = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'username' => 'required|max:255',
            'password' => 'required|max:255|min:6',
        ]);
        if ($validated->fails()) {
            return $this->failValidator($validated);
        }
        $code = rand(100000, 999999);
        $message = "Mã xác thực của bạn là: " . +$code;
        $typeinput = $this->username($request['username']);
        $customer = $this->user->firstOrCreate([
            'first_name' => isset($request['first_name']) ? $request['first_name'] : null,
            'last_name' => isset($request['last_name']) ? $request['last_name'] : null,
            'email' => $typeinput == 'email' ? $request['username'] : null,
            'phone' => $typeinput == 'phone' ? $request['username'] : null,
            'password' => Hash::make($request['password']),
        ]);
        if ($typeinput == 'phone') {
            try {

                $account_sid = getenv("TWILIO_SID");
                $auth_token = getenv("TWILIO_TOKEN");
                $twilio_number = getenv("TWILIO_FROM");
                $phone = $request['username'];
                $client = new Client($account_sid, $auth_token);
                $client->messages->create(convertPhone($phone), [
                    'from' => $twilio_number,
                    'body' => $message
                ]);
            } catch (Exception $e) {
                return $this->sendError("Số điện thoại không hợp lệ");
            }
            $usercode = VerificationLogin::create([
                'user_id' => $customer->id,
                'verify' => $request['password'],
                'expire_at' => Carbon::now()->addMinutes(10),
                'otp' => $code,
            ]);
            return $this->withData($customer, 'Chúng tôi đã gửi mã xác nhận đến số điện thoại của bạn!', 201);
        } elseif ($typeinput == 'email') {
            try {
                $this->sendMail($request['username'], $message);
            } catch (Exception $e) {
                return $this->sendError("Email không hợp lệ");
            }
            $usercode = VerificationLogin::create([
                'user_id' => $customer->id,
                'verify' => $request['password'],
                'expire_at' => Carbon::now()->addMinutes(10),
                'otp' => $code,
            ]);

            return $this->withData($customer, 'Chúng tôi đã gửi mã xác nhận đến email của bạn', 201);
        }
    }
    public function authOTP(OTPRequest $request)
    {
        $verificationOTP = VerificationLogin::where('user_id', $request->user_id)->where('otp', $request->otp)->latest()->first();
        $now = Carbon::now();
        if (!$verificationOTP) {
            return $this->sendError("Xác thực với OTP không thành công!");
        } else {
            if ($now->isAfter($verificationOTP->expire_at)) {
                return $this->sendError("OTP hết hạn!");
            }
        }
        $user = User::where('id', $request->user_id)->latest()->first();

        if ($user) {
            $verificationOTP->update([
                'expire_at' => Carbon::now()
            ]);

            if ($user->is_verified == 0) {
                if ($user->email == null) {
                    $user->update([
                        'is_verified' => 1,
                        'phone_verified_at' => Carbon::now(),
                    ]);
                }
                if ($user->phone == null) {
                    $user->update([
                        'is_verified' => 1,
                        'email_verified_at' => Carbon::now(),
                    ]);
                }

                return $this->withSuccessMessage('Kích hoạt tài khoản thành công!');
            } else {
                $token = $user->remember_token;
                return $this->responseWithToken($token);
            }
        }
        return $this->sendError("Xác thực không thành công!");
    }

    public function forgetPassword(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'phone' => 'string|required|max:12',
        ]);

        if ($validated->fails()) {
            return $this->failValidator($validated);
        }
        $customer = $this->user->where('phone', $request['phone'])->where('is_verified', 1)->first() ?? null;
        if ($customer) {
            $token = getenv("TWILIO_AUTH_TOKEN");
            $twilio_sid = getenv("TWILIO_SID");
            $twilio_verify_sid = getenv("TWILIO_VERIFY_SID");
            $twilio = new Client($twilio_sid, $token);
            try {
                $twilio->verify->v2->services($twilio_verify_sid)
                    ->verifications
                    ->create($request['phone'], "sms");
            } catch (\Exception $e) {
                return $this->sendError('Số điện thoại không hợp lệ');
            }
        } else {
            return $this->sendError("số điện thoại này chưa được đăng ký");
        }

        return $this->withSuccessMessage("Chúng tôi đã gửi mã xác nhận đến số điện thoại của bạn!");
    }

    public function verifiedPhone(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'code' => 'required|min:6|max:6',
            'phone' => 'required|unique:users,phone|regex:/^([0-9\s\-\+\(\)]*)$/|min:10|max:20',
        ]);
        // if ($validated->fails()) {
        //     return $this->failValidator($validated);
        // }
        try {
            $user = User::where('phone', $request['phone'])->first();
            $code = UserCode::where('user_id', $user->id)->first();
            if ($code->code == $request['code']) {
                $user = tap(User::where('phone', $request['phone']))->update([
                    'is_verified' => true,
                    'phone_verified_at' => Carbon::now(),
                ]);
                return $this->withSuccessMessage('Mã xác nhận chính xác!');
            }
        } catch (Exception $e) {
            return $this->sendError("The code is incorrect or has been used!");
        }
        return $this->sendError('Mã xác nhận không chính xác!');
    }

    public function changePassword(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'oldPassword' => 'required|max:255',
            'newPassword' => 'required|max:255',
        ]);
        if ($validated->fails()) {
            return $this->failValidator($validated);
        }
        $customer = Auth()->user();
        if (!password_verify($request['oldPassword'], $customer->password)) {
            return $this->sendError('Mật khẩu cũ không chính xác!');
        }
        $customerUpdatePassword = $customer->update([
            'password' => Hash::make($request['newPassword']),
        ]);
        if ($customerUpdatePassword) {
            $this->logout();
        }

        return $this->withSuccessMessage('Đổi mật khẩu thành công!');
    }

    public function addMail(Request $request)
    {
        $uniqueEmail = Customer::where('email', $request->email)->whereNotNull('email_verified_at')->first() ?? null;
        if (!empty($uniqueEmail)) {
            return $this->sendError("Email này đã được sử dụng");
        }
        $checkMailValid = $this->checkValidatedMail($request->email);
        if (!$checkMailValid) {
            return $this->sendError('email không hợp lệ!');
        }
        $customer = Auth::user();
        $customer->update([
            'email' => $request->email,
        ]);
        $token = Str::random(60);
        $passwordReset = PasswordReset::updateOrCreate([
            'email' => $customer->email,
            'token' => $token,
        ]);
        $sendMail = $customer->notify(new CustomerAddEmail($token));

        return $this->withSuccessMessage('Chúng tôi đã gửi link xác thực đến email của bạn!');
    }

    public function sendMail($email, $otp)
    {
        $details = [
            'title' => 'Mail xác thực danh tính',
            'body' => 'Mã xác nhận của bạn là' . $otp,
        ];
        Mail::to($email)->send(new MailOTP($details));
    }
    public function responseWithToken($token)
    {
        $user = auth()->user();
        $data = [
            'token' => $token,
            'user' => $user,
            'token_type' => 'bearer',
            'expires_in' => 60
        ];
        return $this->withData($data, 'Đăng nhập thành công', 200);
    }
    public function sendOTP($field, $type, $otp)
    {
        if ($field == 'email') {
            $this->sendMail($type, $otp);
        } elseif ($field == 'phone') {
            $message = "Mã xác nhận của bạn là:" . +$otp;
            try {
                $account_sid = getenv("TWILIO_SID");
                $auth_token = getenv("TWILIO_TOKEN");
                $twilio_number = getenv("TWILIO_FROM");
                $phone = $type;
                $client = new Client($account_sid, $auth_token);
                $client->messages->create(convertPhone($phone), [
                    'from' => $twilio_number,
                    'body' => $message
                ]);
            } catch (Exception $e) {
                return $this->sendError("Số điện thoại không hợp lệ");
            }
        }
    }
}
