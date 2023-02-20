<?php
namespace App\Services;

use App\Http\Resources\ChannelCollection;
use App\Models\Channel;
use App\Models\User;
use App\Models\UserRelationship;
use App\Repositories\Comment\CommentRepository;
use Illuminate\Database\Eloquent\Factories\Relationship;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class ChannelService extends BaseService{
    
    public function create($request)
    {
        $relation = UserRelationship::where('user_id1', '=', $request->user_id1)
            ->where('user_id2', '=', $request->user_id2)
            ->first();
        $is_block =0;
        if ($relation->type == 4)
            $is_block =1;
        $channel = Channel::create([
            'is_block' => $is_block,
        ]);
        if ($channel) {
            $channel->users->attach([$request->user_id1, $request->user_id2]);
            return $this->sendResponse(null, 'Thành công');
        }
        return $this->sendError(null, 'Có lỗi xảy ra');
    }

    public function getAll($id) {
        $channel_id = DB::table('user_channels')->where('user_id', $id)->pluck('channel_id')->toArray();
        $channels = Channel::whereIn('id', $channel_id)->paginate();
        if ($channels[0]) 
            return $this->sendResponse(new ChannelCollection($channels), 'Thành công');
        return $this->sendResponse(null, 'Không có tin nhắn');
    }
}
?>