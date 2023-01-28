<?php

namespace App\Repositories\Comment;

use App\Models\Comment;

use App\Repositories\AbstractRepository;

class CommentRepository extends AbstractRepository{




	/**

	 * @return mixed

	 */

	public function model() {

        return Comment::class;

	}

    public function getComment($id) 
    {
        return $this->model()::where('post_id', '=', $id)
            ->orderBy('id', 'desc')
            ->get();
    }

    public function store($request, $user_id)
    {      
        return Comment::create([
            'post_id' => $request->post_id,
            'content' => $request->comment,
            'user_id' => $user_id,
        ]);
    }

}

 ?>