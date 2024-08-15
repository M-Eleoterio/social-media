<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function create(Request $request, $post_id)
    {
        return \DB::table('comments')->insert([
            "text" => $request->text,
            "user_id" => auth('sanctum')->user()->id,
            "post_id" => $post_id,
        ]);
    }
}
