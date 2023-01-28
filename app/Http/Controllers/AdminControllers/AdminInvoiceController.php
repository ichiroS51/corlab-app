<?php

namespace App\Http\Controllers\AdminControllers;

use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class AdminInvoiceController extends Controller
{
    public function index()
    {
        $invoices = Invoice::all();

        return response()->json(
            [
                'invoices' => $invoices
            ],
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
