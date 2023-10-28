<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    // == Funcion para iniciar sesion ==
    public function login(LoginRequest $request){
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)){
            return response([
                'message' => ['Credenciales Invalidas']
            ],422);
        }

        $user = Auth::user();
        return [
            'token' => $user->createToken($request->device_name)->plainTextToken,
        ];
    }

    // == Funcion para cerrar sesion ==
    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response([
            'message' => ['Sesion Cerrada']
        ]);
    }
}

// public function login(LoginRequest $request){
//     $credentials = $request->only('Email', 'Password');

//     $user = User::where('Email', $request->Email)->first();

//     if(!Auth::attempt($credentials)){
//         return response([
//             'message' => ['Credenciales Invalidas']
//         ],422);
//     }

//     return [
//         'token' => $user->createToken($request->device_name)->plainTextToken,
//         'user' => $user
//     ];
// }