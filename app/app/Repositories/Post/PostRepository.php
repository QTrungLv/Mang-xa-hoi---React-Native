<?php
namespace App\Repositories\Post;
use App\Models\Post;
use App\Models\PostInteract;
use App\Models\UserRelationship;
use App\Repositories\AbstractRepository;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class PostRepository extends AbstractRepository{
    
	/**
	 * @return string
	 */
	public function model(): string
	{
        return Post::class;
	}

	public function likePost($request, $post_id) {
		$user = JWTAuth::toUser($request->token);
		$post_interact = PostInteract::where('post_id', '=', $post_id)
			->where('user_id', $user->id)
			->first();
		$post = $this->model->find($post_id);
		$relationship = UserRelationship::where('user_id1', '=', $post->user_id)
			->where('user_id2', '=', $user->id)
			->OrWhere('user_id1', '=', $user->id)
			->where('user_id2', '=', $post->user_id)
			->get();
		if (isset($relationship->type))
		{
			if ($relationship->type == 3) return false; // type = block
		} 
		DB::beginTransaction();
		try {
			if (!empty($post_interact)) {
				$post_interact->delete();
			}
			else {
				PostInteract::create([
					'user_id' => $user->id,
					'post_id' => $post_id
				]);
			}
			DB::commit();
		} catch (\Exception $e) {
            DB::rollBack();
            Log::error($e);
			return false;
        }
		 return true;
	}

	public function getLike($post_id) {
		$post = Post::join('post_interacts', 'post_interacts.post_id', '=', 'posts.id')
			->where('posts.id', '=', $post_id)
			->whereNull('post_interacts.deleted_at')
			->select( DB::raw('count(post_interacts.id) as `like`'))
			->groupBy('post_interacts.user_id')
			->first();
		return $post;
	}
}
 ?>