<?php

namespace App\Http\Controllers\AdminControllers;

use App\Models\Catalog;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AdminTestsController extends Controller
{
    public function index() {
        $profiles = Profile::all();
        $catalogs = Catalog::all();

        return response()->json([
            'tests' => $profiles,
            'catalogs' => $catalogs,
        ]);
    }

    public function edit(Request $request) {
        $newPrice = $request->validate([
            'id' => ['required', 'integer'],
            'price' => ['required', 'integer'],
        ]);

        $updatePrice = Catalog::where('profile_id', $newPrice['id'])->update([
            'price' => $newPrice['price'],
        ]);

        return response($updatePrice, Response::HTTP_OK);
    }
}
