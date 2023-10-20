<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('plantas', function (Blueprint $table) {
            $table->id();
            $table->string('Plant_Name');
            $table->string('Plant_Desc');
            $table->string('Plant_Type');
            $table->float('Earth_Humidity');
            $table->float('Water_Time');
            $table->float('Ambient_Humidity');
            $table->float('Room_Temperature');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plantas');
    }
};
