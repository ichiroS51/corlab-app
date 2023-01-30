<?php

namespace App\Http\Controllers\AdminControllers;

use App\Models\Invoice;
use App\Models\Test;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class AdminInvoiceController extends Controller
{
    public function index()
    {
        $invoices = Invoice::all();
        $tests = Test::all();
        $profiles = Profile::all();

        return response()->json(
            [
                'invoices' => $invoices,
                'tests' => $tests,
                'profiles' => $profiles,
            ], Response::HTTP_OK
        );
    }
    public function edit(Request $request) {
        $invoiceStatus = $request->validate([
            'ci' => ['required', 'integer'],
            'status' => ['required', 'string'],
        ]);

        $newStatus = Invoice::where('user_ci', $invoiceStatus['ci'])->update([
            'status' => $invoiceStatus['status'],
        ]);

        return response($newStatus, Response::HTTP_OK);
    }
}
