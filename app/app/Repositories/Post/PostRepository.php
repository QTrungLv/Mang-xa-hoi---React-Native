<?php
namespace App\Repositories\Post;
use App\Models\Post;
use App\Repositories\AbstractRepository;
class PostRepository extends AbstractRepository{
    
	/**
	 * @return mixed
	 */
	public function model() {
        return Post::class;
	}
}
 ?>