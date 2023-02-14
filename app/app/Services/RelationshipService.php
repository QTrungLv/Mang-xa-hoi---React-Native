<?php
namespace App\Services;

use App\Http\Resources\CommentCollection;
use App\Models\InfoUser;
use App\Models\UserRelationship;
use App\Models\User;
use App\Repositories\Relationship\RelationshipRepository;
use Exception;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class RelationshipService extends BaseService{
    private RelationshipRepository $relationshipRepository;
    public function __construct(RelationshipRepository $relationshipRepository){
        $this->relationshipRepository = $relationshipRepository;
    }
    public function getUserFriends($request){
        // $user = JWTAuth::toUser($request->token);
        $user = ['id' => 1];
        if($request->user_id!=$user['id']){
            $mutualFriends=DB::table('user_relationships As a')->where('a.user_id1', $user['id'])->join('user_relationships As b', 'b.user_id2','=', 'a.user_id2')->where('b.user_id1', $request->user_id)->groupBy('a.user_id1','b.user_id1')->count();
            $friend = User::find($request->user_id);
            $infoUser=InfoUser::where('user_id',$request->user_id )->first();
            $relationship=DB::table('user_relationships')->where('user_id1',$user['id'])->where('user_id2',$request->user_id)->first();
            $data=[
                'id'=>$friend->id,
                'username'=>$friend->first_name.' '.$friend->last_name,
                'avatar'=>$infoUser->avatar,
                'same_friends'=>$mutualFriends,
                'created'=>$relationship->created_at
            ];
            return $this->sendResponse($data, "Thành công");
        }else{
            return $this->sendResponse(null, "Chính mình");;
        }
    }
    public function setAcceptFriend($request){
        $user=JWTAuth::toUser($request->token);
        $userRelationship=UserRelationship::create(['user_id1'=>$user->id, 'user_id2'=>$request->user_id,'type'=>$request->isaccept] );
        if($userRelationship){
           $this->sendResponse($userRelationship, "Thành công");
        }
        return $this->sendError(null, "Có lỗi xảy ra");
    }
    public function getListSuggestedFriends($request){
         $user=JWTAuth::toUser($request->token);
         $subQuery=DB::table('user_relationships As a')->where('a.user_id1', $user->id)->where('a.type',1)->join('user_relationships As b','b.user_id2','=', 'a.user_id2')->where('b.user_id1','<>',$user->id)->where('b.type',1)->groupBy('a.user_id1','b.user_id1')->select('a.user_id1 as id1','b.user_id1 as id2',DB::raw('count(*) as total'));
         $friends=DB::table('users')->joinSub($subQuery,'A','users.id','=','A.id2')->join('info_users','info_users.user_id','=','id2')->select('A.id1','A.id2','A.total','users.first_name','users.last_name','info_users.avatar')->get();
         $listUsers=[];
         foreach($friends as $friend){
             $listUsers[]=[
                'user_id'=>$friend->id2, 
                'username'=>$friend->first_name.' '.$friend->last_name,
                'avatar'=>$friend->avatar,
                'same_friends'=>$friend->total
            ];
         };
         return $this->sendResponse($listUsers, "Thành công");   
        }
     public function setRequestFriend($request){
        $user=JWTAuth::toUser($request->token);
        DB::beginTransaction();
        try{
             DB::table('user_relationships')->upsert(['user_id1','user_id2','type'],[],['user_id1'=>$user->id,'user_id2'=>$request->user_id, 'type'=>0]);
        }catch(Exception $e){
            DB::rollBack();
        }
        DB::commit();
        $numberRequest=DB::table('user_relationships')->where('user_id1',$user->id)->where('type',0)->count();
    if($numberRequest){
        return $this->sendResponse($numberRequest, "Thành công");
    }
        return $this->sendError(null, "Có lỗi xảy ra");
    }
    public function getListBlocks($request){
         $user=JWTAuth::toUser($request->token);
         $listBlocks=DB::table('user_relationships')->where('user_id1', $user->id)->where('type',-1)->paginate(8);
         if($listBlocks){
            return $this->sendResponse($listBlocks->items(), "Thành công");
         }
         return $this->sendError(null, "Có lỗi xảy ra");
    }


   
}
?>