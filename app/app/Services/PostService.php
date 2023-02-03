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
            $post = $this->postRepository->create(['user_id' => 1, 'content' => $request->described ? $request->described : '']);
            if ($request->file('image')) {
                $data = [];
                foreach ([$request->file('image')] as $image) {
                    $extension = $image->getClientOriginalExtension();
                    $file = now() . $image->getClientOriginalName() . '.' . $extension;
                    $uploadedfile = fopen($image, 'r');
                    $object = $bucket->upload($uploadedfile, [
                        'name' => '1/Image/' . $file
                    ]);
                    $url = $object->signedUrl(
                        $expiresAt = new \DateTime('tomorrow')
                    );
                    $data[] = ['post_id' => $post->id, 'link' => $url, 'type' => 'Image'];
                }
                Image::insert($data);
            }
            ;
            if ($request->video) {
                 $data = [];
                foreach ([$request->file('image')] as $image) {
                    $extension = $image->getClientOriginalExtension();
                    $file = now() . $image->getClientOriginalName() . '.' . $extension;
                    $uploadedfile = fopen($image, 'r');
                    $object = $bucket->upload($uploadedfile, [
                        'name' => '1/Video/' . $file
                    ]);
                    $url = $object->signedUrl(
                        $expiresAt = new \DateTime('tomorrow')
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
            return $this->sendResponse($post, 'Thành công');
        }else{
           return $this->sendError(null, "Có lỗi xảy ra");
        };
    }
     public function delete($id,$request){
        $user = JWTAuth::toUser($request->token);
        $post=$this->postRepository->delete($id);
        if($post){
            return $this->sendResponse($post, '');
        }else{
           return $this->sendError(null, "Có lỗi xảy ra");
        };
    }
     public function update($id,$request){
        $params=$request->all();
        $user = JWTAuth::toUser($params['token']);
        $post = $this->postRepository->find($id);
        DB::beginTransaction();
        try{
             $post->content = $params['described'];
            if($params['image']){

            }
            ;
            if($params['image_del']){

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
    public function getAll(){
         $listPosts= $this->postRepository->all();
        return $this->sendResponse( $listPosts, '');
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
}
?>