<?php

namespace App\Repositories\Relationship;

use App\Models\Comment;

use App\Models\UserRelationship;
use App\Repositories\AbstractRepository;

class RelationshipRepository extends AbstractRepository{




	/**

	 * @return mixed

	 */

	public function model() {

        return UserRelationship::class;

	}
    public function store($request, $user_id)
    {      
        return UserRelationship::create([
            'user_id1' => $request->post_id,
            'user_id2' => $request->comment,
            'type' => $user_id,
        ]);
    }

}

 ?>