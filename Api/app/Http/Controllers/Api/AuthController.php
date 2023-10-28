<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Usuarios;
use Laravel\Passport\HasApiTokens;
use App\Models\User;
use App\Models\Login;


class AuthController extends Controller
{
    // public function login(LoginRequest $request){
    //     $data = $request->validated();
        
    //     if(!Auth::attempt($data)){
    //         return response([
    //             'message' => ['Credenciales Invalidas']
    //         ],422);
    //     }

    //     $user = User::where('Email',$data['Email'])->first();
    //     return [
    //         'token' => $user->createToken('token')->plainTextToken,
    //         'user' => $user
    //     ];
    // }
    
    public function login(LoginRequest $request){
        $user = User::where('Email','=',$request->Email)->first();
        if ($user || $request->Email == $user->Password){
            return response()->json([
                'message' => 'Bienvenido',
                'user' => $user,
            ],200);
        } else{
            return response()->json([
                'message' => 'Credenciales Invalidas'
            ],422);
        }
    }


}