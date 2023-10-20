<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Usuarios;
use Illuminate\Http\Request;


class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Usuarios = Usuarios::all();
        return $Usuarios;
    }

    /**
     * Store a newly created resource in storage.
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
     */
    public function show(string $id)
    {
        $Usuario = Usuarios::find($id);
        return $Usuario;
    }

    /**
     * Update the specified resource in storage.
     */


    public function update(Request $request, string $id)
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
     */
    public function destroy(string $id)
    {
        $Usuario = Usuarios::destroy($id);
        return $Usuario;
    }
}
