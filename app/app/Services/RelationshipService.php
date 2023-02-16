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
        $user = JWTAuth::toUser($request->token);
        if($request->user_id!=$user->id){
            $mutualFriends=DB::table('user_relationships As a')->where('a.user_id1', $user->id)->join('user_relationships As b', 'b.user_id2','=', 'a.user_id2')->where('b.user_id1', $request->user_id)->groupBy('a.user_id1','b.user_id1')->count();
            $friend = User::find($request->user_id);
            $infoUser=InfoUser::where('user_id',$request->user_id )->first();
            $relationship=DB::table('user_relationships')->where('user_id1',$user->id)->where('user_id2',$request->user_id)->first();
            if($friend && $infoUser && $relationship){
                $data=[
                    'id'=>$friend->id,
                    'username'=>$friend->first_name.' '.$friend->last_name,
                    'avatar'=>$infoUser->avatar?$infoUser->avatar:'',
                    'same_friends'=>$mutualFriends,
                    'created'=>$relationship->created_at
                ];
            return $this->sendResponse($data, "Thành công");
            }
           return $this->sendError(null, "Có lỗi xảy ra");
        }else{
            return $this->sendResponse(null, "Chính mình");;
        }
    }
    public function setAcceptFriend($request){
        $user=JWTAuth::toUser($request->token);
        if($user){
            $data=['user_id1'=>$user->id, 'user_id2'=>$request->user_id,'type'=>$request->is_accept];
            $userRelationship=$this->relationshipRepository->updateRelation($data);
            if($userRelationship){
            return $this->sendResponse($userRelationship, "Thành công");
            }
        }
        return $this->sendError(null, "Có lỗi xảy ra");
    }
    public function getListSuggestedFriends($request){
         $user=JWTAuth::toUser($request->token);
         $friends=$this->relationshipRepository->friends($user);
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
        $data=['user_id1'=>$user->id,'user_id2'=>$request->user_id, 'type'=>0];
        $this->relationshipRepository->updateRelation($data);
        $numberRequest=DB::table('user_relationships')->where('user_id1',$user->id)->where('type',0)->count();
        if($numberRequest){
            return $this->sendResponse($numberRequest, "Thành công");
        }
            return $this->sendError(null, "Có lỗi xảy ra");
        }
    public function getListBlocks($request){
         $user=JWTAuth::toUser($request->token);
         if($user){
            $listBlocks=DB::table('user_relationships')->where('user_id1', $user->id)->where('type',-1)->paginate(8);
            if($listBlocks){
                return $this->sendResponse($listBlocks->items(), "Thành công");
            }
         }
         return $this->sendError(null, "Có lỗi xảy ra");
    }


   
}
?>