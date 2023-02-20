<?php
namespace App\Services;

use App\Http\Resources\PostCollection;
use App\Http\Resources\SearchCollection;
use App\Http\Resources\UserCollection;
use App\Repositories\Search\SearchRepository;

class SearchService extends BaseService{
    private SearchRepository $searchRepository;
    public function __construct(SearchRepository $searchRepository){
        $this->searchRepository = $searchRepository;
    }

    public function search($request)
    {
        $count = isset($request->count) ? $request->count : config('constants.count');
        $data_search = $this->searchRepository->search($request, $count);
        if ($data_search) {
            return $this->sendResponse(new PostCollection($data_search), '');
        }
        return $this->sendError(null, 'Có lỗi xảy ra');
    }
    
    public function getList($request)
    {
        $count = isset($request->count) ? $request->count : config('constants.count');
        $listSearch = $this->searchRepository->getList($request, $count);
        if ($listSearch) 
            return $this->sendResponse(new SearchCollection($listSearch), '');
        return $this->sendError(null, 'Có lỗi xảy ra');
    }

    public function delete($request)
    {
        $search = $this->searchRepository->delete($request);
        if ($search) {
            return $this->sendResponse(null, 'Thành công');
        }
        return $this->sendError(null, 'Có lỗi xảy ra');
    }

    public function searchUser($request)
    {
        $user = $this->searchRepository->searchUser($request);
        if ($user) {
            return $this->sendResponse(new UserCollection($user), 'Thành công');
        }
        return $this->sendError(null, 'Có lỗi xảy ra');
    }
}
?>