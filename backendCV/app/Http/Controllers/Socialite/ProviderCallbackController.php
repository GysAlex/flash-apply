<?php

namespace App\Http\Controllers\Socialite;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class ProviderCallbackController extends Controller
{
    public function callback(Request $request)
    {
        $valideProviders = ['github', 'google', 'linkedin-openid'];

        if(!in_array($request->provider, $valideProviders))
        {
            $errorMessage = "Une erreur est survenue lors de la connexion";

            return redirect(env('FRONTEND_URL').'/?error='.urlencode($errorMessage));
        }

        $providedUser = Socialite::driver($request->provider)->user();

        $user = User::updateOrCreate([
            'provider_id' => $providedUser->user['id'] ?? $providedUser->user['sub'],
            'provider_name' => $request->provider,
        ], [
            'name' => $providedUser->user['name'],
            'email' => $providedUser->user['email'],
            'provider_token' => $providedUser->token,
            'provider_refresh_token' => $providedUser->refreshToken,
            'profile_image' => $providedUser->user['picture'],
        ]);



        Auth::login($user);

        session()->regenerate();

        return redirect(env('FRONTEND_URL'))->with('success', 'Bienvenue '.Auth::user()->name.' !');

    }
}
