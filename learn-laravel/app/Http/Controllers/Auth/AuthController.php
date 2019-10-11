<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Validation\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request) {
        $credentials = [
            'username'  => $request->username,
            'password'  => $request->password,
        ];

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json([
                'message' => 'Bad request',
                'status'  => 0,
            ], 400);
        }

        return response()->json([
            'access_token' => $token,
            'user'         => $user,
        ], 200);
    }
}
