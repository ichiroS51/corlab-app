<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class InvoiceController extends Controller
{

    private $user_ci = 0;

    public function geInvoice(Request $request) {
        $objs = $request->validate([
            'ci' => 'required|integer',
            'total_pay' => 'required|integer',
        ]);

        $this->user_ci = $objs['ci'];

        $testData = Invoice::where('user_ci', $objs['ci'])->update([
            'total_pay' => $objs['total_pay'],
        ]);

        return response()->json($testData, Response::HTTP_OK);
    }

    public function pay(Request $request) {
        $pays = $request->validate([
            'ci' => 'required|integer',
            'pay_number' => 'required|integer'
        ]);

        $saved = Invoice::where('user_ci', $pays['ci'])->update([
            'pay_number' => $pays['pay_number'],
        ]);

        return response()->json($saved, Response::HTTP_OK);
    }
}
