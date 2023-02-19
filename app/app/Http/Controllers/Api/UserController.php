<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected UserService $userService;

    public function __construct(UserService $userService) {
        $this->userService = $userService;
    }
    
    public function getInfo($id)
    {
        return $this->userService->getInfo($id);
    }
}
