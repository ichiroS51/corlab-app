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
        $credentials = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::guard('client')->attempt($credentials)) {
            return response([
                'token' => '98000012324Abdmn&&&%$',
            ]);
        }

        return response([
            'token' => '98000012324Abdmn&&&%$',
        ]);

    }

    public function adminLogin(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email:rfc,dns', 'exists:administrators,email'],
            'password' => ['required'],
        ]);

        if (Auth::guard('admin')->attempt($credentials)) {
            return response([
                'token' => $this->adminToken,
                'admin_id' => $this->adminID,
            ]);
        }
    }

    public function logout()
    {
        return response([
            'success' => true,
        ]);
    }
}
