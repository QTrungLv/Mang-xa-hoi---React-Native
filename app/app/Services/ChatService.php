<?php
namespace App\Services;

use App\Http\Resources\ChatCollection;
use App\Http\Resources\CommentCollection;
use App\Models\Chat;
use App\Repositories\Chat\ChatRepository;
use App\Repositories\Comment\CommentRepository;
use Tymon\JWTAuth\Facades\JWTAuth;

class ChatService extends BaseService{
    private ChatRepository $chatRepository;
    public function __construct(ChatRepository $chatRepository){
        $this->chatRepository = $chatRepository;
    }
    
    public function getChat($channel_id)
    {
        $chats = $this->chatRepository->getChat($channel_id);
        if ($chats) {
            return $this->sendResponse(new ChatCollection($chats), 'Thành công');
        }
        return $this->sendError(null, 'Có lỗi xảy ra');
    }

    public function sendMessage($request) {
        // $user = isset(JWTAuth::toUser($request->token)) ? JWTAuth::toUser($re bquest->token) : null;
        $chat = Chat::create([
            'user_id' => $request->user_id,
            'channel_id' => $request->channel_id,
            'content'=> $request->content,
        ]);
        if ($chat) {
            $chats = $this->chatRepository->getChat($request->channel_id);
            return $this->sendResponse(new ChatCollection($chats), 'Thành công');
        }
        return $this->sendError(null, 'Có lỗi xảy ra');
    }
}
?>