<?php

use App\Http\Controllers\Api\UsuariosController;
use App\Http\Controllers\Api\PlantasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Psy\Readline\Hoa\Console;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(UsuariosController::class)->group(function(){
    Route::get('/Inicio', 'index');
    Route::post('/InicioS', 'store');
    Route::get('/Inicio/{id}', 'show');
    Route::put('/Usuarios/{id}', 'update');
    Route::delete('/Inicio/{id}', 'destroy');

    
});

Route::controller(PlantasController::class)->group(function(){
    Route::get('/Plantas', 'index');
    Route::post('/Planta', 'store');
    Route::get('/Plantas/{id}', 'show');
    Route::put('/Plantas/{id}', 'update');
    Route::delete('/Plantas/{id}', 'destroy');
});

Route::get('/Login2',[App\Http\Controllers\Api\AuthController::class,'Login']);