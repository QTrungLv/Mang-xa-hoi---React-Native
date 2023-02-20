<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    use HasFactory;
    protected $fillable = [
        'is_block',
    ];

    public function users() {
        return $this->belongsToMany(User::class, 'user_channels', 'channel_id', 'user_id');
    }

    public function getReceiver($user_id) {
        $channel = Channel::find($this->id);
        $user = $channel->users()->where('user_id','!=', $user_id)->first();
        return User::find($user->id);
    }

    public function getLastMessage() {
        return Chat::where('channel_id','=', $this->id)->orderBy('created_at', 'desc')->first();
    }
}
