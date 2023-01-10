<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function requestTest(Request $request)
    {
        $data = $request->validate([
            'first-name' => 'required|string',
            'last-name' => 'required|string',
            'email-address' => 'required|email|string|unique:users,email',
            'user-ci' => 'required|string',
            'cellphone' => 'required|string',
        ]);

        $client = Client::create([
            'user_ci' => $data['user-ci'],
            'firstname' => $data['first-name'],
            'lastname' => $data['last-name'],
            'email' => $data['email-address'],
            'phone_number' => $data['cellphone'],
        ]);

        $token = $client->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token,
        ]);
    }
}
