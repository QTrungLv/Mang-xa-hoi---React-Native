<?php
namespace App\Services;

use App\Http\Resources\CommentCollection;
use App\Repositories\Comment\CommentRepository;
use Tymon\JWTAuth\Facades\JWTAuth;

class CommentService extends BaseService{
    private CommentRepository $commentRepository;
    public function __construct(CommentRepository $commentRepository){
        $this->commentRepository = $commentRepository;
    }
    
    public function getComment($id)
    {
        $comments = $this->commentRepository->getComment($id);
        if ($comments) {
            return $this->sendResponse(new CommentCollection($comments), 'Thành công');
        }
        return $this->sendError(null, 'Có lỗi xảy ra');
    }

    public function store($request)
    {
        $user = JWTAuth::toUser($request->token);
        $comment = $this->commentRepository->store($request, $user->id);
        if ($comment) {
            return $this->getComment($request->post_id);
        }
        return $this->sendError(null, 'Có lỗi xảy ra');
    }
}
?>