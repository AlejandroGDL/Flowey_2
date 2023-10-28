<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuariosController;
use App\Http\Controllers\PlantasController;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
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

Route::post('/Login',[AuthController::class,'Login']);