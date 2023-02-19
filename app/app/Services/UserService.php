<?php
namespace App\Services;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserService extends BaseService{
    
    public function getInfo($id) {
        $user = User::find($id);
        // dd($user->posts);
        if ($user) {
            return $this->sendResponse(new UserResource($user), 'Thành công');
        }
        return $this->sendError(null, 'Có lỗi xảy ra');
    }
}
?>