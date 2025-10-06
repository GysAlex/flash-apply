<?php

use App\Http\Controllers\Socialite\ProviderCallbackController;
use App\Http\Controllers\Socialite\ProviderRedirectController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});


Route::get('/auth/{provider}/redirect', [ProviderRedirectController::class, 'redirect'] );
Route::get('/auth/{provider}/callback', [ProviderCallbackController::class, 'callback'] );


require __DIR__.'/auth.php';
