<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    private $adminEmail = 'corlab@mail.com';
    private $adminToken = '13495912374Abdmn&&&%$';
    private $usersToken = '98000012324Abdmn&&&%$';
    private $adminID = 88723423;

    public function login(Request $request)
    {
        if ($request->input('email') == $this->adminEmail) {
            $credentials = $request->validate([
                'email' => ['required', 'email:rfc,dns', 'exists:administrators,email'],
                'password' => ['required'],
            ]);
        } else {
            $credentials = $request->validate([
                'email' => ['required', 'email:rfc,dns', 'exists:clients,email'],
                'password' => ['required'],
            ]);
        }

        if ($credentials['email'] == $this->adminEmail) {
            if (Auth::guard('admin')->attempt($credentials)) {
                return response([
                    'token' => $this->adminToken,
                    'admin_id' => $this->adminID,
                ]);
            }
        } else {
            if (Auth::guard('client')->attempt($credentials)) {
                return response([
                    'token' => '98000012324Abdmn&&&%$',
                ]);
            }
        }

        return response([
            'token' => '98000012324Abdmn&&&%$',
        ]);
    }

    public function logout()
    {
        return response([
            'success' => true,
        ]);
    }
}
