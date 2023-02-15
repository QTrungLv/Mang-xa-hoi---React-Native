<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\RelationshipService;
use Illuminate\Http\Request;

class RelationshipController extends Controller
{
    private RelationshipService $relationshipService;
    public function __construct(RelationshipService $relationshipService){
        $this->relationshipService = $relationshipService;
    }
    public function getUserFriends(Request $request){
       return $this->relationshipService->getUserFriends($request);
    }
     public function setAcceptFriend(Request $request){
       return $this->relationshipService->setAcceptFriend($request);
    }
     public function getListSuggestedFriends(Request $request){
       return $this->relationshipService->getListSuggestedFriends($request);
    }
     public function setRequestFriend(Request $request){
       return $this->relationshipService->setRequestFriend($request);
    }
    public function getListBlocks(Request $request){
       return $this->relationshipService->getListBlocks($request);
    }
}
