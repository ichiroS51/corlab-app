<?php

namespace App\Http\Controllers\AdminControllers;

use App\Models\User;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AdminUsersController extends Controller
{
    public function create(Request $request) {
        $data = $request->validate([
            'ci' => ['required', 'integer'],
            'name' => ['required', 'string'],
            'password' => ['required', 'string'],
            'admin_id' => ['required', 'integer'],
        ]);

        $newUser = User::create([
            'name' => $data['name'],
            'password' => Hash::make($data['password']),
            'admin_id' => $data['admin_id'],
        ]);

        $lastUser = DB::table('users')->get()->last();

        $client = Client::where('user_ci', $data['ci'])->update([
            'user_id' => $lastUser->id,
        ]);

        return response($newUser, Response::HTTP_OK);
    }

    public function show() {
        $users = User::all();
        $clients = DB::table('clients')->where('user_id', '!=', null)->get();

        return response()->json([
            'users' => $users,
            'clients' => $clients,
        ], Response::HTTP_OK);
    }
}
