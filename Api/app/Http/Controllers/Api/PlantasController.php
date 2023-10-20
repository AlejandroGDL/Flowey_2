<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Plantas;
use Illuminate\Http\Request;

class PlantasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Plantas = Plantas::all();
        return $Plantas;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $Planta = new Plantas();
        $Planta->Plant_Name = $request->Plant_Name;
        $Planta->Plant_Desc = $request->Plant_Desc;
        $Planta->Plant_Type = $request->Plant_Type;
        $Planta->Earth_Humidity = $request->Earth_Humidity;
        $Planta->Water_Time = $request->Water_Time;
        $Planta->Ambient_Humidity = $request->Ambient_Humidity;
        $Planta->Room_Temperature = $request->Room_Temperature;

        $Planta->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $Planta = Plantas::find($id);
        return $Planta;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Planta = Plantas::findOrFail($request->id);
        $Planta->Plant_Name = $request->Plant_Name;
        $Planta->Plant_Desc = $request->Plant_Desc;
        $Planta->Plant_Type = $request->Plant_Type;
        $Planta->Earth_Humidity = $request->Earth_Humidity;
        $Planta->Water_Time = $request->Water_Time;
        $Planta->Ambient_Humidity = $request->Ambient_Humidity;
        $Planta->Room_Temperature = $request->Room_Temperature;

        $Planta->save();

        return $Planta;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $Plantas = Plantas::destroy($id);
        return $Plantas;
    }
}
