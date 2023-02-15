<?php

namespace App\Repositories\Relationship;

use App\Models\Comment;

use App\Models\UserRelationship;
use App\Repositories\AbstractRepository;
use DB;

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
    public function friends($user){
          $subQuery=DB::table('user_relationships As a')->where('a.user_id1', $user->id)->where('a.type',1)->join('user_relationships As b','b.user_id2','=', 'a.user_id2')->where('b.user_id1','<>',$user->id)->where('b.type',1)->groupBy('a.user_id1','b.user_id1')->select('a.user_id1 as id1','b.user_id1 as id2',DB::raw('count(*) as total'));
         $friends=DB::table('users')->joinSub($subQuery,'A','users.id','=','A.id2')->join('info_users','info_users.user_id','=','id2')->select('A.id1','A.id2','A.total','users.first_name','users.last_name','info_users.avatar')->get();
         return $friends;
    }
    public function updateRelation($data){
         $check=DB::table('user_relationships')->upsert($data,['user_id1','user_id2'],['type'] );
         return $check;
    }
}

 ?>