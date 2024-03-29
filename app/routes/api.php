<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\RelationshipController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AuthSMSController;
use App\Http\Controllers\Api\ChannelController;
use App\Http\Controllers\Api\ChatController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\SearchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
   
// });
// Route::post('/register', [AuthSMSController::class,'register'])->name("user.register");
Route::post('/login', [AuthSMSController::class,'login'])->name("user.login");
Route::post('/register', [AuthSMSController::class, 'register'])->name('user.register');
Route::post('/logout', [UserController::class, 'logout']);
Route::post('/otp', [AuthSMSController::class, 'authOTP']);
Route::post('/post/upload-file', [PostController::class, 'upload']);
Route::prefix('post')->middleware('jwt.auth')->group(function () {
    Route::get('/', [PostController::class, 'all']); //Tất cả bài viết
    Route::get('/{id}', [PostController::class, 'show']); // Chi tiết bài viết
    Route::post('/create', [PostController::class, 'create']); // Tạo bài viết
    Route::put('/{id}/update', [PostController::class, 'update']); // Cập nhật bài viết
    Route::post('/{id}/delete', [PostController::class, 'delete']); //Xóa bài viết
    Route::get('/getInfo/{post_id}', [PostController::class, 'getInfo']);
    Route::post('/likePost/{post_id}', [PostController::class, 'likePost']); //Like bài viết
});
Route::prefix('relation')->middleware('jwt.auth')->group(function () {
    Route::get('/friend', [RelationshipController::class, 'getFriend']);
    Route::get('/friends', [RelationshipController::class, 'getFriends']);
    Route::get('/requested', [RelationshipController::class, 'getRequestedFriends']);
    Route::post('/accept', [RelationshipController::class, 'setAcceptFriend']);
    Route::get('/suggested', [RelationshipController::class, 'getListSuggestedFriends']);
    Route::post('/request', [RelationshipController::class, 'setRequestFriend']);
    Route::post('/block', [RelationshipController::class, 'getListBlocks']);
});
Route::prefix('comment')->middleware('jwt.auth')->group(function () {
    Route::get('/{id}', [CommentController::class, 'show']);
    Route::post('store', [CommentController::class, 'store']);
});
Route::prefix('search')->middleware('jwt.auth')->group(function () {
    Route::post('/', [SearchController::class, 'search']);
    Route::get('/list', [SearchController::class, 'getList']);
    Route::delete('delete', [SearchController::class, 'delete']);
    Route::post('/searchUser', [SearchController::class, 'searchUser']);
});
Route::prefix('channel')->middleware('jwt.auth')->group(function () {
    Route::get('/{id}', [ChannelController::class, 'getAll']); //gọi tất cả các channel chat của user có id =$id
    Route::post('/create', [ChannelController::class, 'create']); // tạo một channel chat giữa 2 người khi click buuton nhắn tin lần đầu
    Route::post('/sendMessage', [ChatController::class, 'sendMessage']);
    Route::get('/getChannel/{id}', [ChatController::class, 'getChat']); // lấy danh sách tin nhắn của channel có id = $id
});
Route::prefix('personal')->middleware('jwt.auth')->group(function () {
    Route::get('/getPost/{id}', [PostController::class, 'getPostByUser']); //lấy danh sách bài viết của user
    Route::get('/infoUser/{id}', [UserController::class, 'getInfo']); //info user
});
