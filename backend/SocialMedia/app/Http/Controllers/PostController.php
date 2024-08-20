<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Types\Model\Comments;

class PostController extends Controller
{

    public function getUserPosts($id)
    {
        return Post::where('user_id', '=', $id)->get();
    }

    public function index()
    {
        $posts = Post::all()->reverse();
        foreach ($posts as $post) {
            $comments = $post->comments;
            foreach ($comments as $comment) {
                $comment['author'] = \DB::table('users')->where('id', '=', $comment['user_id'])->value('name');
            }
            $data[] = [
                "id" => $post->id,
                "caption" => $post->caption,
                "imageUrl" => $post->imageUrl,
                "owner" => $post->user->name,
                "comments" => $post->comments
            ];
        }
        return response()->json($data);
    }

    public function get($id)
    {
        $comments = [];
        foreach (Comment::where('post_id', $id)->get() as $comment) {
                $comments[] = [
                    "comment_author" => \DB::table('users')->where('id', $comment->user_id)->value('name'),
                    "text" => $comment->text
                ];
        }

        $post = Post::find($id);

        $data = [
            "post" => $post,
            "author" => User::find($post->user_id)->value('name'),
            "comments" => $comments
        ];

        return $data;

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
            "user_id" => auth('sanctum')->user()->id,
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
        if (Post::where('id', '=', $id)->delete())
            return response()->json([
                "message" => "Post deletado."
            ], 200);
        return response()->json([
            "message" => "Não foi possível deletar o post."
        ], 500);
    }

}
