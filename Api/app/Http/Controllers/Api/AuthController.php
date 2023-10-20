<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\HasApiTokens;

class AuthController extends Controller
{

    public function Login(Request $request){
        // if (!Auth::attempt($request->only('Email','Password'))){
        //     return response([
        //         'message' => 'Credenciales Invalidas'
        //     ]);
        // }

        // $User = Auth::user();

        // $Token = $User->createToken('token')->planTextToken;
        // $Cookie = cookie('jwt',$Token,60*24);

        // return response([
        //     'message' => 'Login Correcto'
        // ])->withCookie($Cookie);
    }

    
}
