<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        foreach ($posts as $post) {
            $data[] = [
                "id" => $post->id,
                "caption"=> $post->caption,
                "owner" => $post->user->name,
            ];
        }
        return response()->json($data);
    }

    public function get($id)
    {
        return Post::find($id);
    }

    public function edit(Request $request, $id)
    {
        $data = $request->validate([
            'caption' => "required",
            'imageUrl' => "required"
        ]);
        if (Post::where('id', '=', $id)->update($data))
            return Post::find($id);

        return json_encode([
            'error' => "Não foi possivel editar o post."
        ]);

    }

    public function add(Request $request)
    {
        $post = Post::create([
            "caption" => $request['caption'],
            "imageUrl" => $request['imageUrl'],
            "user_id" => auth()->id(),
        ]);
        if ($post) {
            return response()->json($post, 201);
        }

        return json_encode([
            'error' => "Não foi possivel criar o post."
        ]);
    }

    public function remove($id) 
    {
        if (Post::where('id','=',$id)->delete())
            return response()->json([
                "message" => "Post deletado."
            ], 200);
            return response()->json([
                "message" => "Não foi possível deletar o post."
            ], 500);
    }

}
