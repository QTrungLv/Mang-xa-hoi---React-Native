<?php
namespace App\Services;

use App\Http\Resources\PostCollection;
use App\Http\Resources\PostResource;
use App\Models\Comment;
use App\Models\PostInteract;
use App\Models\Image;
use App\Repositories\Comment\CommentRepository;
use App\Repositories\Post\PostRepository;
use Exception;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
class PostService extends BaseService{
    private PostRepository $postRepository;
    private CommentRepository $commentRepository;
    public function __construct(PostRepository $postRepository, CommentRepository $commentRepository){
        $this->postRepository = $postRepository;
        $this->commentRepository=$commentRepository;
    }
    public function create($request){
        $bucket=app('firebase.storage')->getBucket();
        $user = JWTAuth::toUser($request->token);
        DB::beginTransaction();
        try {
            $post = $this->postRepository->create(['user_id' => $user->id, 'content' => $request->described ? $request->described : '']);
            if ($request->file('image')) {
                $dataImage = [];
                $index=0;
                foreach ([$request->file('image')] as $image) {
                    $index+=1;
                    $extension = $image->getClientOriginalExtension();
                    $file = now() . $image->getClientOriginalName() . '.' . $extension;
                    $uploadedfile = fopen($image, 'r');
                    $object = $bucket->upload($uploadedfile, [
                        'name' => $user->id.'/Image/' .$post->id.'_'.$index.'.'.$extension
                    ]);
                    $url = $object->signedUrl(
                        $expiresAt = new \DateTime('2023-10-22'),
                    );
                    $dataImage[] = ['post_id' => $post->id,'index'=>$index,'name'=>$user->id.'/Image/' .$post->id.'_'.$index.'.'.$extension, 'link' => $url, 'type' => 'Image'];               
                }
                Image::insert($dataImage);
            }
            ;
            if ($request->file('video')) {
                 $dataVideo = [];
                 $index=0;
                foreach ([$request->file('image')] as $image) {
                    $index+=1;
                    $extension = $image->getClientOriginalExtension();
                    $file = now() . $image->getClientOriginalName() . '.' . $extension;
                    $uploadedfile = fopen($image, 'r');
                    $object = $bucket->upload($uploadedfile, [
                        'name' => $user->id.'/Video/' .$post->id.'_'.$index.'.'.$extension
                    ]);
                    $url = $object->signedUrl(
                        $expiresAt = new \DateTime('2023-10-22')
                    );
                    $dataVideo[] = ['post_id' => $post->id,'index'=>$index, 'link' => $url, 'type' => 'Video','name'=>$user->id.'/Video/' .$post->id.'_'.$index.'.'.$extension];
                }
                Image::insert($dataVideo);
            }
            ;
            DB::commit();
             $dataSend=['id'=>$post->id,'url'=>''];
               return $this->sendResponse($dataSend, 'Thành công');
        }catch(Exception $e){
            DB::rollBack();
            return $this->sendError(null, "Có lỗi xảy ra");

        };
    }
     public function delete($id,$request){
        $user = JWTAuth::toUser($request->token);
        $isSuccessful=$this->postRepository->delete($id);
        Image::where('post_id',$id)->delete();
        Comment::where('post_id',$id)->delete();
        if($isSuccessful){
            return $this->sendResponse($isSuccessful, '');
        }else{
           return $this->sendError(null, "Có lỗi xảy ra");
        };
    }
     public function update($id,$request){
        // dd($request->ip());  
        $params=$request->all();
         $bucket=app('firebase.storage')->getBucket();
        $user = JWTAuth::toUser($params['token']);
        $post = $this->postRepository->find($id);
        DB::beginTransaction();
        try{
             $post->content = $params['described'];
            if(array_key_exists('image', $params)){
                if($params['image']){
                  $data = [];
                  $index=0;
                  foreach ($params['image'] as $image) {
                        $index+=1;
                        $extension = $image->getClientOriginalExtension();
                        $file = now() . $image->getClientOriginalName() . '.' . $extension;
                        $uploadedfile = fopen($image, 'r');
                        $object = $bucket->upload($uploadedfile, [
                            'name' => $user->id.'/Image/' . $id.'_'.$index.'.'.$extension
                        ]);
                        $url = $object->signedUrl(
                            $expiresAt = new \DateTime('2023-10-22'),
                        );
                        $data[] = ['post_id' => $post->id, 'link' => $url, 'type' => 'Image','index'=>$index, 'name'=> $user->id.'/Image/' . $id.'_'.$index.'.'.$extension];
                    }
                    Image::insert($data);
                }
            }
            ;
            if(array_key_exists('image_del',$params)){
                if($params['image_del']){
                    foreach ($params['image_del'] as $index) {
                        $image=Image::where('post_id',$id)->where('index',$index)->first();
                        if($bucket->object($image->name)){
                            $image->delete();
                            try{
                                $checkDelete=$bucket->object($image->name)->delete();
                            }catch(Exception $e){
                                 
                            }
                        };
                    }
               }
            }
            ;

            if(array_key_exists('video',$params)){
                if($params['video']){

                }
            }
            ;
            if(array_key_exists('auto_block',$params)&&$params['auto_block']!=null){

            }
            ;
            if(array_key_exists('auto_accept',$params)){
                if($params['auto_accept']){
                    
                }
            }
            ;
            $post->save();
            DB::commit();
            return $this->sendResponse($post, 'Thành công');
        }catch(Exception $e){
            DB::rollBack();
        }
        return $this->sendError("Lỗi", "Lỗi");
    }
    public function getAll($request){
         $params = $request->all();
        $user = JWTAuth::toUser($params['token']);
         $listPosts= $this->postRepository->all();
         if($listPosts){
            return $this->sendResponse( new PostCollection($listPosts), 'Thành công');
         }
        return $this->sendError( null, 'Có lỗi xảy ra');
    }
    
     public function getByUser($userId, $request){
         $listPostbyUser= $this->postRepository->findWhere(['user_id'=> $userId], ['*'], '');
         return $this->sendResponse($listPostbyUser, '');
    }

    public function getPost($id, $request){
        $params = $request->all();
        $user = JWTAuth::toUser($params['token']);
        $post = $this->postRepository->find($id);
        if($post){
            return $this->sendResponse( new PostResource($post), 'Thành công');
         }
        return $this->sendError( null, 'Có lỗi xảy ra');
    }
        
    public function getLike($postId, $user_id){
        $post = $this->postRepository->getLike($postId);
        $post = isset($post) ? $post : ['like' => 0];
        $posts = $this->postRepository->find($postId);
        $post['is_like'] = $posts->getLike($postId, $user_id);
        if ($post)
            return $this->sendResponse($post, 'Thành công');
        return $this->sendError(null, 'Có lỗi xảy ra');
    }

    public function likePost($request, $post_id)
    {
        $post = $this->postRepository->likePost($request, $post_id);
        if ($post){
            $user = JWTAuth::toUser($request['token']);
            return $this->getLike($post_id, $user->id);
        }
        return $this->sendError(null, 'Không thành công');
    }

    public function getPostByUser($user_id) {
        $posts = $this->postRepository->getPostByUser($user_id);
        if ($posts)
            return $this->sendResponse(new PostCollection($posts), 'Thành công');
         return $this->sendError(null, 'Có lỗi xảy ra');
    }
}
?>