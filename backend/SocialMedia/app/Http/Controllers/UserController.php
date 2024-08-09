<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Sanctum\PersonalAccessToken;

class UserController extends Controller
{
    function login(Request $request)
    {
        $userData = $request->validate([
            "email" => "email|required|string",
            "password" => "required|string",
        ]);

        if (auth()->attempt($userData))
            return json_encode([
                "token" => auth()->user()->createToken('auth_token')->plainTextToken
            ]);

        return json_encode([
            "error" => "Usuario não encontrado"
        ]);
    }

    function register(Request $request)
    {
        $userData = $request->validate([
            "name" => "string|min:5",
            "email" => "email|required|string",
            "password" => "required|string",
        ]);
        $userData['password'] = bcrypt($userData['password']);

        if (User::create($userData)) {
            return json_encode([
                "success" => "Usuário criado com sucesso!"
            ]);
        }
    }

    function logout()
    {
        auth()->user()->tokens()->delete();

        return json_encode(['message' => 'Deslogado com sucesso!']);
    }

    function checkAuth(Request $request) {
        if (PersonalAccessToken::findToken($request->bearerToken())) {
            return "auth";
        } else {
            return "guest";
        }
    }

    function index() {
        return User::all();
    }
}
