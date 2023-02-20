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
            'like' => $this->getCountlike(),
            'comment' => $this->getCountComment(),
            'is_liked' => $this->getLike($this->id, $user->id),
            'described' => $this->content,
            'created' => $this->created_at,
            'modified'=>$this->updated_at,
            'image' => $this->getImages(),
            'video' => $this->getVideo(),
            'author' => [
                'id' => $this->user_id,
                'username' => $this->user->username,
                'avatar' => $this->user->avatar,
            ],
            'is_blocked' => $this->user->checkBlock($user->id, $this->user_id) ? 1 : 0,
            'can_edit' =>($this->user_id == $user->id) ? 1: 0, 
        ];
    }
}
