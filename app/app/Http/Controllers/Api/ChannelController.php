<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ChannelService;
use Illuminate\Http\Request;

class ChannelController extends Controller
{
    protected ChannelService $channelService;

    public function __construct(ChannelService $channelService) {
        $this->channelService = $channelService;
    }

    public function create(Request $request){
        return $this->channelService->create($request);
    }

    public function getAll($id){
        return $this->channelService->getAll($id);
    }

    public function getChat($id) {
        return $this->channelService->getChat($id);
    }
}
