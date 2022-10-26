<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\OTPRequest;
use App\Mail\MailOTP;
use App\Models\User;
use App\Models\VerificationLogin;
use Illuminate\Http\Request;
use App\Services\BaseService;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
class AuthController extends Controller
{
    protected BaseService $baseService;
    public function __construct(BaseService $baseService){
          $this->middleware('auth:api',['except'=>['login','authOTP']]);
          $this->baseService=$baseService;
    }
    // Login and send Mail Verification
    public function login(LoginRequest $request){
             $credentials=$request->all();
             if(Auth::attempt( $credentials)){
                $user = User::whereEmail($request->email)->first();
                //  $otp="1234";
                $verificationOTP=VerificationLogin::where('user_id',$user->id)->latest()->first();
                $now=Carbon::now();
                if($verificationOTP&&$now->isBefore($verificationOTP->expire_at)){
                   $this->sendMail($request->email,$verificationOTP->otp);
                }else{     
                $otp=rand(100000,999999);        //  $token= $user->createToken('App')->plainTextToken;
               VerificationLogin::create([
                'user_id'=>$user->id,
                'otp'=>$otp,
                'expire_at'=>Carbon::now()->addMinutes(5)
               ]);
                $this->sendMail($request->email,$otp);
            }
             }else{
                return response()->json(['Email'=>'Sai tên đăng nhập hoặc mật khẩu']);
             }

    }
    // Verification OTP
    public function authOTP(OTPRequest $request){
        // dd($request);
         $verificationOTP=VerificationLogin::where('user_id',$request->user_id)->where('otp',$request->otp)->latest()->first();
         $now=Carbon::now();
         if(!$verificationOTP){
              return response()->json(['Email'=>'Đăng nhập với OTP thất bại']);
         }else{
             if($now->isAfter($verificationOTP->expire_at)){
              return response()->json(['Email'=>'Hết hạn OTP']);
             }
         }
     $user=User::where('id',$request->user_id)->first();
     if($user){
        $verificationOTP->update([
            'expire_at'=>Carbon::now()
        ]);
         $token= $user->createToken('App')->plainTextToken;
         return $this->responseWithToken($token);
     }
        return response()->json(['Email'=>'Đăng nhập lỗi']);
    
    }
    public function sendMail($email,$otp){
        // dd($user->email);
        Mail::to($email)->send(new MailOTP($otp));
    }
    public function responseWithToken($token){
        $user=auth()->user();
        
       return $this->baseService->sendResponse([
        'token'=>$token,
        'user'=>$user,
        'token_type'=>'bearer',
        'expires_in'=>60
       ], "OK");
    }
}
