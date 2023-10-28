<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Usuarios = Usuarios::all();
        return $Usuarios;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Usuario = new Usuarios();
        $Usuario -> User_Name = $request -> User_Name;
        $Usuario -> User_LastName = $request -> User_LastName;
        $Usuario -> Email = $request -> Email;
        $Usuario -> Password = $request -> Password;
        $Usuario -> Permissions = $request -> Permissions;

        $Usuario -> save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function show(Usuarios $id)
    {
        $Usuario = Usuarios::find($id);
        return $Usuario;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Usuarios $usuarios)
    {
        $Usuario = Usuarios::findOrFail($request->id);
        $Usuario->User_Name = $request->User_Name;
        $Usuario->User_LastName = $request->User_LastName;
        $Usuario->Email = $request->Email;
        $Usuario->Password = $request->Password;
        $Usuario->Permissions = $request->Permissions;

        $Usuario->save();
        return $Usuario;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function destroy(Usuarios $id)
    {
        $Usuario = Usuarios::destroy($id);
        return $Usuario;
    }
}
