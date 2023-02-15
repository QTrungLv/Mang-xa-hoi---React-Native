<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Tymon\JWTAuth\Facades\JWTAuth;

class PostResource extends JsonResource
{
     /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $user = JWTAuth::toUser($request->token);
        return [
            'id' => $this->id,
            'like' => $this->post_interacts_count,
            'comment' => $this->comments_count,
            'is_liked' => $this->getLike($this->id, $user->id),
            'created' => $this->created_at,
            'author' => [
                'id' => $this->user_id,
                'username' => $this->user->username,
            ],
            'is_blocked' => $this->type == 4 ? 1 : 0, 
        ];
    }
}
