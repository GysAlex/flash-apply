<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'min:4'],
        ];
    }

    public function messages()
    {
        return [
            'email.required' => "Votre email est obligatoire",
            'email.email' => "Votre email doit être conforme",
            'password.required' => "Le mot de passe est obligatoire",
            'password.min' => "Votre mot de passe est trop court"
        ];
    }
}
