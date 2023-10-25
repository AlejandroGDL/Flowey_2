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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'Email' => ['required', 'Email', 'exists:usuarios,Email'],
            'Password' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'Email.required' => 'El email es obligatorio',
            'Email.email' => 'El email no es válido',
            'Email.exists' => 'Esa cuenta no existe',
            'Password' => 'El password es obligatorio'
        ];
    }
}
