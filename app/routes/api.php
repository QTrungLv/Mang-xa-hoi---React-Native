<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\AuthSMSController;
use App\Http\Controllers\Api\CommentController;
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

Route::prefix('comment')->middleware('jwt.auth')->group(function () {
    Route::get('/{id}', [CommentController::class, 'show']);
    Route::post('store', [CommentController::class, 'store']);
});
