<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ClientController extends Controller
{
    public function storeClient(Request $request)
    {
            $data = $request->validate([
                'firstname' => 'required|string',
                'lastname' => 'required|string',
                'email' => 'required|email:rfc,dns|unique:clients',
                'user_ci' => 'required|integer',
                'phone_number' => 'required|string',
            ]);

            $client = Client::create([
                'user_ci' => $data['user_ci'],
                'firstname' => $data['firstname'],
                'lastname' => $data['lastname'],
                'email' => $data['email'],
                'phone_number' => $data['phone_number'],
            ]);

            $invoiceCI = Invoice::create([
                'user_ci' => $data['user_ci'],
            ]);

//            $client = Client::create($request->all());

        return response()->json($client, Response::HTTP_OK);
    }
}
