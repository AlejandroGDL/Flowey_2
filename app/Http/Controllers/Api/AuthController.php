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
use PharIo\Manifest\Email;

class AuthController extends Controller
{    
    public function login(LoginRequest $request){
        $user = Usuarios::where('Email','=',$request->Email,' AND ','Password','=',$request->Password)->first();
        $Nombre = Usuarios::where('Email','=',$request->Email)->value('User_Name');

        if ($user || $request->Email == $request->Password){
            return response()->json([
                'message' => 'Bienvenido',
                'user' => $user,
                'token' => $user->createToken($Nombre)->plainTextToken,
            ],200);
        } else{
            return response()->json([
                'message' => 'Credenciales Invalidas'
            ],422);
        }
    }


    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'user' => null,
            'message' => 'Sesion Cerrada'
        ],200);
    }


}