<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\PostService;
use Google\Cloud\Storage\StorageClient;
use Illuminate\Http\Request;
use Storage;

class PostController extends Controller
{
    private PostService $postService;
    public function __construct(PostService $postService){
        $this->postService = $postService;
    }
    public function upload(Request $request){
        $bucket=app('firebase.storage')->getBucket();
        $bucket->object('OKBro.jpg')->delete();
        dd("OK");
        $fileUpload = $request->file('file');
        // dd($request->file('file')->getSize());
        $extension = $request->file('file')->getClientOriginalExtension();
        $file      =  '.' . $extension;
         $uploadedfile = fopen($fileUpload, 'r');
        $object = $bucket->upload($uploadedfile, [
            'name' => "OKBro".$file
        ]);
        // dd($object);
            return null;
    }
    public function create(Request $request){
        return $this->postService->create($request);
    }
     public function update($id, Request $request){
       
         return $this->postService->update($id, $request);
    }
    public function delete($id, Request $request){
         return $this->postService->delete($id,$request);
    }
     public function show($id, Request $request){
         return $this->postService->getPost($id,$request);
    }
     public function all(Request $request){
         return $this->postService->getAll();
    }
      public function listByUser(Request $request){
        $userId = $request->user_id;
         return $this->postService->getByUser($userId,$request);
    }
 
}
