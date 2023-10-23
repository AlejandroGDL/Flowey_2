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

    public function login(Request $request){
        $request->validate([
            'Email' => 'required|email',
            'Password' => 'required'
        ]);
        
        $user = User::where('Email', $request->email)->first();
        
        if(!$user || !Auth::attempt($request->only('Email','Password'))){
            return response([
                'message' => ['Credenciales Invalidas']
            ],422);
        }
        
        return [
            'token' => $user->createToken($request->device_name)->plainTextToken,
        ];
    }


    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response([
            'message' => ['Sesion Cerrada']
        ]);
    }
}
