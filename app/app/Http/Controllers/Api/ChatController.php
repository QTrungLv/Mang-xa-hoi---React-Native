<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ChatService;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    protected ChatService $chatService;

    public function __construct(ChatService $chatService) {
        $this->chatService = $chatService;
    }
    public function getChat($channel_id)
    {
        return $this->chatService->getChat($channel_id);
    }

    public function sendMessage(Request $request)
    {
        return $this->chatService->sendMessage($request);
    }
}
