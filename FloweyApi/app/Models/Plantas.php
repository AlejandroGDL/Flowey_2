<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plantas extends Model
{
    use HasFactory;
    protected $fillable = ['Plant_Name','Plant_Desc','Plant_Type','Earth_Humidity','Ambient_Humidity','Room_Temperature'];
}
