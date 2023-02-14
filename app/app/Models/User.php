<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Twilio\Rest\Client;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'password',
        'phone',
        'sex',
        'first_name',
        'last_name',
        'is_verified',
        'email_verified_at',
        'phone_verified_at'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'phone_verified_at'=>'datetime',
    ];
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims(){
        return [];
    }

    /**
     * @return Attribute
     */

    protected function username(): Attribute 
    {
        // dd($this->getUserName($this->id));
        return Attribute::make(
            get: fn () => $this->getUserName($this->id),
        );
    }

    /**
     * @param $id
     * @return string
     */

    protected function getUserName($id): string
    {
        $user = User::find($id);
        if (!empty($user)) {
            if (!is_null($user->first_name) && !is_null($user->last_name)) {
                return $user->last_name.' '.$user->first_name;
            }
            elseif (!is_null($user->first_name)) {
                return $user->first_name;
            }
            else {
                return $user->last_name;
            }
        }
    }
}
