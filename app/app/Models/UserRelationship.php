<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRelationship extends Model
{
    use HasFactory;
   protected $fillable = [
        'user_id1',
        'user_id2',
        'type',
    ];
}
