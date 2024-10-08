<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);
Route::get('/logout', [UserController::class, 'logout'])->middleware("auth:sanctum");
Route::post('/checkAuth', [UserController::class,'checkAuth']);

Route::get('/posts', [PostController::class, 'index'])/* ->middleware('auth:sanctum') */;
Route::post('/posts', [PostController::class, 'add'])->middleware("auth:sanctum");
Route::get('/posts/{id}', [PostController::class, 'get']);
Route::put('/posts/{id}', [PostController::class, 'edit']);
Route::delete('/posts/{id}', [PostController::class, 'remove']);
Route::post('/posts/{post_id}/comment', [CommentController::class, 'create']);

Route::get('/users', [UserController::class, 'getUsers'])->middleware('auth:sanctum');
Route::get('/users/{id}', [UserController::class, 'getUser'])->middleware('auth:sanctum');
Route::get('/users/{id}/posts', [PostController::class, 'getUserPosts'])->middleware('auth:sanctum');

