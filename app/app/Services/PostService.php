<?php
namespace App\Services;
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
                $data = [];
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
                    $data[] = ['post_id' => $post->id,'index'=>$index, 'link' => $url, 'type' => 'Image'];
                }
                Image::insert($data);
            }
            ;
            if ($request->video) {
                 $data = [];
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
                    $data[] = ['post_id' => $post->id, 'link' => $url, 'type' => 'Video'];
                }
                Image::insert($data);
            }
            ;
            DB::commit();
        }catch(Exception $e){
            DB::rollBack();
        };
        if($post){
            $data=['id'=>$post->id,'url'=>''];
            return $this->sendResponse($data, 'Thành công');
        }else{
           return $this->sendError(null, "Có lỗi xảy ra");
        };
    }
     public function delete($id,$request){
        $user = JWTAuth::toUser($request->token);
        $isSuccessful=$this->postRepository->delete($id);
        if($isSuccessful){
            return $this->sendResponse($isSuccessful, '');
        }else{
           return $this->sendError(null, "Có lỗi xảy ra");
        };
    }
     public function update($id,$request){
        $params=$request->all();
         $bucket=app('firebase.storage')->getBucket();
        $user = JWTAuth::toUser($params['token']);
        $post = $this->postRepository->find($id);
        DB::beginTransaction();
        try{
             $post->content = $params['described'];
            if($params['image']){
                  $data = [];
                  $index=0;
                foreach ([$params['image']] as $image) {
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
                    $data[] = ['post_id' => $post->id, 'link' => $url, 'type' => 'Image','index'=>$index];
                }
                Image::insert($data);
            }
            ;
            if($params['image_del']){
               foreach ($params['image_del'] as $index) {
                    $bucket->object($user->id.'/Image/'.$id.'_'.$index)->delete();
                }
            }
            ;
            if($params['video']){

            }
            ;
            if($params['auto_block']!=null){

            }
            ;
            if($params['auto_accept']!=null){

            }
            ;
            $post->save();
            DB::commit();
            return $this->sendResponse($post, '');
        }catch(Exception $e){
            DB::rollBack();
        }
        return $this->sendError("Lỗi", "Lỗi");
    }
    public function getAll($request){
         $params = $request->all();
        $user = JWTAuth::toUser($params['token']);
         $listPosts= $this->postRepository->all();
         $data=['post'=>[]];
         foreach($listPosts as $post){
            $images=Image::where('post_id',$post['id'])->where('type','Image')->get();
            $videos=Image::where('post_id',$post['id'])->where('type','Video')->get();
            $numberLike = PostInteract::where('post_id', '=', $post['id'])->count();
            $numberComment = Comment::where('post_id', '=', $post['id'])->count();
            $userInteract= PostInteract::where('post_id', '=',$post['id'])->where('user_id','=', $user->id)->first();
            $is_liked = 0;
            if($userInteract){
                $is_liked = 1;
            };
            $data['post'][]=['id'=>$post['id'],'name'=>'Không có','image'=>$images,'video'=>$videos,'described'=>$post['content'],
            'like'=>$numberLike, 'comment'=>$numberComment, 'is_liked'=>$is_liked, 'is_blocked'=>0
        ];
         }
         if($data){
            return $this->sendResponse( $data, 'Thành công');
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
        $numberLike = PostInteract::where('post_id', '=', $id)->count();
        $numberComment = Comment::where('post_id', '=', $id)->count();
        $userInteract= PostInteract::where('post_id', '=', $id)->where('user_id','=', $user->id)->first();
        $is_liked = 0;
        if($userInteract){
            $is_liked = 1;
        };
        $data = [
            'id' => $post->id,
            'described' => $post->content,
            'create'=>$post->created_at,
            'modified'=>$post->updated_at,
            'like' => $numberLike,
            'comment' => $numberComment,
            'is_liked' => $is_liked
        ];
        if($post){
              return $this->sendResponse($data, 'Thành công');
        }else{
            return $this->sendError(null, "Có lỗi xảy ra");
        }
    }
        
    public function getLike($postId){
        $post = $this->postRepository->getLike($postId);
        $post = isset($post) ? $post : ['like' => 0];
        if ($post)
            return $this->sendResponse($post, 'Thành công');
        return $this->sendError(null, 'Có lỗi xảy ra');
    }

    public function likePost($request, $post_id)
    {
        $post = $this->postRepository->likePost($request, $post_id);
        if ($post)
            return $this->getLike($post_id);
        return $this->sendError(null, 'Không thành công');
    }
}
?>