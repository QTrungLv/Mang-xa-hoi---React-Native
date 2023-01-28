<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\PostService;
use Illuminate\Http\Request;

class PostController extends Controller
{
    private PostService $postService;
    public function __construct(PostService $postService){
        $this->postService = $postService;
    }
    public function create(Request $request){
        return $this->postService->create($request);
    }
     public function update($postId, Request $request){
       
         return $this->postService->update($postId, $request);
    }
    public function delete($postId, Request $request){
         return $this->postService->delete($postId,$request);
    }
     public function show(){
        
    }
     public function all(Request $request){
         return $this->postService->getAll();
    }
      public function listByUser(Request $request){
        $userId = $request->user_id;
         return $this->postService->getByUser($userId,$request);
    }
 
}
