<?php

namespace App\Repositories\Chat;

use App\Models\Chat;

use App\Repositories\AbstractRepository;

class ChatRepository extends AbstractRepository{
	/**

	 * @return mixed

	 */

	public function model() {

        return Chat::class;

	}

    public function getChat($channel_id) {
        $query = Chat::where('channel_id' , '=', $channel_id)
            ->orderBy('id', 'desc');
        return $query->paginate(20);
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