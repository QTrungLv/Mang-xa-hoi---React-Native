<?php

use App\Http\Controllers\Api\AuthSMSController;
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
Route::post('/register', [AuthSMSController::class,'register'])->name("user.register");
Route::post('/active-account', [AuthSMSController::class,'activeAccount'])->name("user.activeAccount");
Route::post('/login', [AuthSMSController::class,'login'])->name("user.login");
Route::post('/verify-phone', [AuthSMSController::class, 'verifiedPhone'])->name('user.verifiedPhone');
