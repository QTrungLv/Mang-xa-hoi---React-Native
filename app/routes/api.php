<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\AuthSMSController;
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
Route::post('/otp', [AuthSMSController::class, 'authOTP']);
Route::prefix('post')->middleware('jwt.auth')->group(function () {
    Route::get('/', [PostController::class, 'all']);
    Route::get('/list', [PostController::class, 'listByUser']);
    Route::get('/{id}', [PostController::class, 'show']);
    Route::post('/create', [PostController::class, 'create']);
    Route::put('/{id}/update', [PostController::class, 'update']);
    Route::post('/{id}/delete', [PostController::class, 'delete']);
    Route::post('/upload-file', [PostController::class, 'upload']);
    Route::get('/getInfo/{post_id}', [PostController::class, 'getInfo']);
    Route::post('/{post_id}/likePost', [PostController::class, 'likePost']);
});

Route::prefix('comment')->middleware('jwt.auth')->group(function () {
    Route::get('/{id}', [CommentController::class, 'show']);
    Route::post('store', [CommentController::class, 'store']);
});
Route::prefix('search')->middleware('jwt.auth')->group(function () {
    Route::post('/', [SearchController::class, 'search']);
    Route::get('/list', [SearchController::class, 'getList']);
    Route::delete('delete', [SearchController::class, 'delete']);
});
