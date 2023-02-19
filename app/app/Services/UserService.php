<?php
namespace App\Services;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserService extends BaseService{
    
    public function getInfo($id) {
        $user = User::find($id);
        if ($user) {
            return $this->sendResponse(new UserResource($user), 'Thành công');
        }
        return $this->sendError(null, 'Có lỗi xảy ra');
    }

    /** 
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::logout();
        return $this->sendResponse( 'Successfully logged out', 'Thành công');
    }
}
?>