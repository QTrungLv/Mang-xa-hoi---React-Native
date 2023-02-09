<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\SearchService;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    protected SearchService $searchService;
    
    public function __construct(SearchService $searchService) {
        $this->searchService = $searchService;
    }

    public function search(Request $request)
    {
        return $this->searchService->search($request);
    }

    public function getList(Request $request)
    {
        return $this->searchService->getList($request);
    }

    public function delete(Request $request)
    {
        return $this->searchService->delete($request);
    }
}
