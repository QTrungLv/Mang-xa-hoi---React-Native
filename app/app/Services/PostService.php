<?php
namespace App\Services;
use App\Repositories\Post\PostRepository;
class PostService extends BaseService{
    private PostRepository $postRepository;
    public function __construct(PostRepository $postRepository){
        $this->postRepository = $postRepository;
    }
    public function create($request){
        $data = [
            'user_id'=>$request->user_id,
            'content'=>$request->content
        ];
        $post=$this->postRepository->create($data);
        if($post){
            return $this->sendResponse($post, '');
        }else{
           return $this->sendError("Lỗi", "Lỗi");
        };
    }
     public function delete($postId,$request){
       
        $post=$this->postRepository->delete($postId);
        if($post){
            return $this->sendResponse($post, '');
        }else{
           return $this->sendError("Xóa không thành công", "Lỗi");
        };
    }
     public function update($postId,$request){
        $data = [
            'content' => $request->input('content')
        ];
        $post=$this->postRepository->update($postId, $data);
        if($post){
            return $this->sendResponse($post, '');
        }else{
            return $this->sendError("Lỗi", "Lỗi");
        };
    }
    public function getAll(){
         $listPosts= $this->postRepository->all();
        return $this->sendResponse( $listPosts, '');
    }
    
     public function getByUser($userId, $request){
         $listPostbyUser= $this->postRepository->findWhere(['user_id'=> $userId], ['*'], '');
         return $this->sendResponse($listPostbyUser, '');
         
    }
    public function getLike($postId){
        $post = $this->postRepository->getLike($postId);
        $post = isset($post) ? $post : ['like' => 0];
        if ($post)
            return $this->sendResponse($post, '');
        return sendError(null, 'Không thành công');
    }

    public function likePost($request, $post_id)
    {
        $post = $this->postRepository->likePost($request, $post_id);
        if ($post)
            return $this->getLike($post_id);
        return sendError(null, 'Không thành công');
    }
}
?>