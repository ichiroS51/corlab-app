<?php

namespace App\Http\Controllers;

use App\Models\Test;
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
            'profilesIds' => 'required',
        ]);

        $this->user_ci = $objs['ci'];

        foreach ($objs['profilesIds'] as $id) {
            $createdTest = Test::create([
                'profile_id' => $id,
                'client_id' => $this->user_ci,
            ]);
        }

        $testData = Invoice::where('user_ci', $objs['ci'])->update([
            'total_pay' => $objs['total_pay'],
        ]);

        return response()->json([
            'data' => $testData,
            'profilesSelected' => $objs['profilesIds'],
        ], Response::HTTP_OK);
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
