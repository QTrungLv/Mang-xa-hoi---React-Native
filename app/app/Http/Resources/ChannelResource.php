<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Tymon\JWTAuth\Facades\JWTAuth;

class ChannelResource extends JsonResource
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
            'channel_id' => $this->id,
            'receiver' =>[
                'id' => $this->getReceiver($user->id)->id,
                'username' => $this->getReceiver($user->id)->username,
                'avatar' => isset($this->getReceiver($user->id)->infoUser->avatar) ? $this->getReceiver($user->id)->infouser->avatar : null,
            ],
            'last_message' => !empty($this->getLastMessage()) ? new ChatResource($this->getLastMessage()) : null,
            'is_block' => $this->is_block,
        ];
    }
}
