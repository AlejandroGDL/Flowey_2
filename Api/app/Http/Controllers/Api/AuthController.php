<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Laravel\Passport\HasApiTokens;


class AuthController extends Controller
{

    // public function login(LoginRequest $request){
    //     $data = $request->validate();

    //     $user = User::where('Email', $request->email)->first();
        
    //     //

    //     if(!$user || !Auth::attempt($data)){
    //         return response([
    //             'message' => ['Credenciales Invalidas']
    //         ],422);
    //     }

    //     return [
    //         'token' => $user->createToken($request->device_name)->plainTextToken,
    //     ];
    // }


    public function login(LoginRequest $request){
        $credentials = $request->only('Email', 'Password');

        $user = User::where('Email', $request->Email)->first();

        if(!Auth::attempt($credentials)){
            return response([
                'message' => ['Credenciales Invalidas']
            ],422);
        }

        return [
            'token' => $user->createToken($request->device_name)->plainTextToken,
            'user' => $user
        ];
    }
    

    // public function login(LoginRequest $request)
    // {
    //     $credentials = $request->only('Email', 'Password');

    //     if (Auth::attempt($credentials)) {
    //         $user = User::where('Email', $request->Email)->first();
    //         $token = $user->createToken('authToken')->accessToken;

    //         return response()->json([
    //             'user' => $user,
    //             'access_token' => $token
    //         ]);
    //     }

    //     return response()->json(['error' => 'Unauthorized'], 401);
    // }

    


    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response([
            'message' => ['Sesion Cerrada']
        ]);
    }
}




// public function login(LoginRequest $request)
    // {
    //     $credentials = $request->only('email', 'password');

    //     if (Auth::attempt($credentials)) {
    //         $user = User::where('email', $request->email)->first();
    //         $token = $user->createToken('authToken')->accessToken;

    //         return response()->json([
    //             'user' => $user,
    //             'access_token' => $token
    //         ]);
    //     }

    //     return response()->json(['error' => 'Unauthorized'], 401);
    // }
