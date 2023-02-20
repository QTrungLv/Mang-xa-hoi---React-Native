<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Tymon\JWTAuth\Facades\JWTAuth;

class ChatResource extends JsonResource
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
            'author'=> [
                'name' => $this->user->username,
                'id' =>$this->user_id,
                'avatar' => isset($this->user->infoUser->avatar) ? $this->user->infoUser->avatar : null,
            ],
            'content' => $this->content,
            'created_at' => Carbon::parse($this->created_at)->toDateTimeString(),
            'is_author' => ($user->id == $this->user_id) ? 1 : 0,
        ];
    }
}
