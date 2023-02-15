<?php
namespace App\Repositories\Search;

use App\Models\Post;
use App\Models\Search;
use App\Repositories\AbstractRepository;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class SearchRepository extends AbstractRepository{
    
	/**
	 * @return string
	 */
	public function model(): string
	{
        return Search::class;
	}

	public function search($request, $count)
    {
        $user = JWTAuth::toUser($request->token);
        if (!is_null($request->keyword)) {
            $this->model::create([
                'keyword' => $request->keyword,
                'user_id' => isset($request->user_id) ? $request->user_id : $user,
            ]);
            $keyword = explode(' ', preg_replace('/\s+/', ' ', $request->keyword));
            $keyword = implode(',', $keyword);
            $data = Post::whereRaw('match(content) against(?)', array($keyword))
                ->withCount(['comments', 'post_interacts'])
                ->leftJoin('user_relationships', 'posts.user_id', '=', 'user_relationships.user_id1')
                ->where('user_id1', '!=', $user->id)
                ->orWhereNull('user_id1')
                ->whereRaw('match(content) against(?)', array($keyword))
                ->select('posts.*', DB::raw('ifnull(user_relationships.type, 3) as type'))
                ->orderBy('user_relationships.type', 'asc')
                ->paginate($count);
            return $data;
        }
        return null;


    }

    public function getList($request, $count)
    {
        $user = JWTAuth::toUser($request->token);
        return $this->model->where('user_id', '=', $user->id)
            ->orderBy('created_at', 'desc')->select('searches.*')->paginate($count);
    }

    public function delete($request)
    {
        $user = JWTAuth::toUser($request->token);
        $search_id =  $this->model->where('user_id', '=', $user->id)
            ->orderBy('created_at', 'desc')->pluck('id')->toArray();
        $flag = true;
        DB::beginTransaction();
        try {

            if ($request->all) {
                $this->model->whereIn('id', $search_id)->delete();
            }
            else {
                if (in_array($request->search_id, $search_id)) {
                    $this->model->where('id', '=', $request->search_id)->delete();
                }
                else {
                    $flag =  false;
                }
            }
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error($e);
            $flag =  false;
        }
        return $flag;
    }
}
 ?>