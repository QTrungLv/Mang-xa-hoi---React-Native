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
    public function getFriends($request){
        $user = JWTAuth::toUser($request->token);
        $data=['friends'=>[]];
        if($request->user_id){
            $friends=DB::table('user_relationships')->where('user_id1',$request->user_id)->where('type',1)->join('users','users.id','=','user_relationships.user_id2')->leftJoin('info_users','info_users.user_id','=','user_relationships.user_id2')->get();
            foreach($friends as $friend){
                if($friend->user_id2!=$user->id){
                     $mutualFriends=DB::table('user_relationships As a')->where('a.user_id1', $user->id)->join('user_relationships As b', 'b.user_id2','=', 'a.user_id2')->where('b.user_id1',$friend->user_id2)->groupBy('a.user_id1','b.user_id1')->count();
                     $data['friends'][]=[
                        'id'=>$friend->user_id2,
                        'username'=>$friend->first_name.' '.$friend->last_name,
                        'avatar'=>$friend->avatar?$friend->avatar:'',
                        'same_friends'=>$mutualFriends,
                        'created'=>$friend->created_at
                    ];
                }
            }
            if($friends){
            return $this->sendResponse($data, "Thành công");
            }
        }else{
            $friends=DB::table('user_relationships')->where('user_id1',$user->id)->where('type',1)->join('users','users.id','=','user_relationships.user_id2')->leftJoin('info_users','info_users.user_id','=','user_relationships.user_id2')->get();
                foreach($friends as $friend){
                    // dd($friend);
                        $mutualFriends=DB::table('user_relationships As a')->where('a.user_id1', $user->id)->join('user_relationships As b', 'b.user_id2','=', 'a.user_id2')->where('b.user_id1',$friend->user_id2)->groupBy('a.user_id1','b.user_id1')->count();
                        $data['friends'][]=[
                            'id'=>$friend->id,
                            'username'=>$friend->first_name.' '.$friend->last_name,
                            'avatar'=>$friend->avatar?$friend->avatar:'',
                            'same_friends'=>$mutualFriends,
                            'created'=>$friend->created_at
                        ];
                }
            if($friends){
               return $this->sendResponse($data, "Thành công");
            }
        }
        return $this->sendError(null, "Có lỗi xảy ra");
    
        return $this->sendResponse(null, "Chính mình");;
    }
    public function setAcceptFriend($request){
        $user=JWTAuth::toUser($request->token);
        if($user){
            $relation=$this->relationshipRepository->findWhere(['user_id1'=>$request->user_id, 'user_id2'=>$user->id]);
            if($relation){
                $data1=['user_id1'=>$request->user_id,'user_id2'=>$user->id,'type'=>$request->is_accept];
                $data2=['user_id1'=>$user->id, 'user_id2'=>$request->user_id,'type'=>$request->is_accept];
                $userRelationship1=$this->relationshipRepository->updateRelation($data1);
                $userRelationship2=$this->relationshipRepository->updateRelation($data2);
                if($userRelationship1&&$userRelationship2){
                  return $this->sendResponse($userRelationship2, "Thành công");
                }
            }
        }
        return $this->sendError(null, "Có lỗi xảy ra");
    }
    public function getListSuggestedFriends($request){
         $user=JWTAuth::toUser($request->token);
         $friends=$this->relationshipRepository->friends($user);
         $listUsers=[];
         foreach($friends as $friend){
            $checkExist=DB::table('user_relationships')->where([['user_id1', $user->id],['user_id2',$friend->id2]])->orWhere([['user_id1', $friend->id2],['user_id2',$user->id]])->exists();
            if(!$checkExist&&$friend->id2!=$user->id){
                  $listUsers[]=[
                'user_id'=>$friend->id2, 
                'username'=>$friend->first_name.' '.$friend->last_name,
                'avatar'=>$friend->avatar,
                'same_friends'=>$friend->total
            ];
            }
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
    public function getRequestedFriends($request){
            $user=JWTAuth::toUser($request->token);
            if($user){
                $listRequestedFriends=DB::table('user_relationships')->where('user_relationships.user_id2', $user->id)->where('type',0)->join('users','users.id','=','user_relationships.user_id1')->leftJoin('info_users','info_users.user_id','=','user_relationships.user_id1')->select('user_relationships.user_id1 as id','users.first_name','users.last_name','info_users.avatar')->get();
                if($listRequestedFriends){
                    return $this->sendResponse($listRequestedFriends, "Thành công");
                }            
            }
            $this->sendError(null, "Có lỗi xảy ra");
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