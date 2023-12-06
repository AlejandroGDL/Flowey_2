<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\LoginRequest;


class AppServiceProvider extends ServiceProvider
{



    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }



    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Validator::extend ('Email', LoginRequest::class);
        Schema::defaultStringLength(191);
    }
}
