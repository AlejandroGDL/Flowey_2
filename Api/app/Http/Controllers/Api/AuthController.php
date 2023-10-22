<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Laravel\Passport\HasApiTokens;
use Laravel\Sanctum\NewAccessToken;


class AuthController extends Controller
{

    public function login(LoginRequest $request){
        

        $data = $request->validated();

        if (!Auth::attempt($data)){
            return response([
                'message' => ['Credenciales Invalidas']
            ],422);
        }
        

        $user = Auth::user();
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }

    
}
