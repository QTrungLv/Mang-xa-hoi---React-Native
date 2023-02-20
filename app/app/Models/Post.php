<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'content'
    ];

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function post_interacts()
    {
        return $this->hasMany(PostInteract::class);
    }

    public function getLike($id, $user_id)
    {
        $post = Post::join('post_interacts', 'post_interacts.post_id','=', 'posts.id')
            ->where('posts.id', '=', $id)
            ->where('post_interacts.user_id', '=', $user_id)
            ->whereNull('post_interacts.deleted_at')
            ->first();
        if ($post) return 1;
        return 0;
    }
    public function getCountComment() {
        $cmt = Comment::where('post_id', '=', $this->id)->count();
        return $cmt;
     }

     public function getCountLike() {
        $like = PostInteract::where('post_id', '=', $this->id)->count();
        return $like;
     }

     public function getImages() {
        return Image::where('post_id', '=', $this->id)->where('type','Image')->get();
     }
    
     public function getVideo() {
        return Image::where('post_id','=', $this->id)->where('type','Video')->get();
     }

}
