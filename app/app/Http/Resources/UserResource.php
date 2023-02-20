<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $user = JWTAuth::toUser($request->token);
        return [
            'id' => $this->id,
            'username' =>$this->username,
            'created' => $this->created_at,
            'description' => isset($this->infoUser->description) ? $this->infoUser->description : null,
            'avatar' => isset($this->infoUser->avatar) ? $this->infoUser->avatar : null,
            'address' => isset($this->infoUser->address) ? $this->infoUser->address : null,
            'city' => isset($this->infoUser->city) ? $this->infoUser->city : null,
            'country' => isset($this->infoUser->country) ? $this->infoUser->country : null,
            'total_friend' => $this->getCountFriend(),
            'is_friend' => $this->checkFriend($user->id) ? 1 : 0,
            'is_block' => $this->checkBlock($user->id, $this->id) ? 1 : 0,
        ];
    }
}
