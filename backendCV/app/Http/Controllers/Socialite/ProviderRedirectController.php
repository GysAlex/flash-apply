<?php

namespace App\Http\Controllers\Socialite;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class ProviderRedirectController extends Controller
{
    public function redirect(Request $request)
    {
        $valideProviders = ['facebook', 'google', 'linkedin-openid'];

        if(!in_array($request->provider, $valideProviders))
        {
            $errorMessage = "Provider invalide";
            return redirect(env('FRONTEND_URL').'?error='.urlencode($errorMessage));
        }

        try{

            return Socialite::driver($request->provider)->redirect();

        } catch(Exception $e){

            return redirect(env('FRONTEND_URL'))->withErrors(["Something went wrong ".$e]);

        }

    }
}
