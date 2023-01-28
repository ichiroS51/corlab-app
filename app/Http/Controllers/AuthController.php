<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    private $adminEmail = 'corlab@mail.com';
    private $adminToken = '13495912374Abdmn&&&%$';
    private $usersToken = '9800001232Us3r&&&%$';
    private $adminID = 88723423;

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email:rfc,dns', 'exists:administrators,email'],
            'password' => ['required'],
        ]);

        if ($credentials['email'] == $this->adminEmail) {
            if (Auth::guard('admin')->attempt($credentials)) {
                return response([
                    'token' => $this->adminToken,
                    'admin_id' => $this->adminID,
                ]);
            }
        } else {
            if (Auth::guard('web')->attempt($credentials)) {
                return response([
                    'token' => $this->usersToken,
                ]);
            }
        }
    }

    public function logout()
    {
        return response([
            'success' => true,
        ]);
    }
}
