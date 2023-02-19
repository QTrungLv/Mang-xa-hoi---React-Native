<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Tymon\JWTAuth\Facades\JWTAuth;

class CommentResource extends JsonResource
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
            'comment' => $this->content,
            'created' => $this->created_at,
            'poster' => [
                'id' => $this->user->id,
                'username' => $this->user->username,
                'avatar' => $this->user->avatar,
            ],
            'is_blocked' => $this->user->checkBlock($user->id, $this->user_id) ? 1 : 0,
        ];
    }
}
