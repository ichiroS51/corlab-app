<?php

namespace App\Http\Controllers;

use App\Models\Catalog;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProfilesController extends Controller
{
    public function index() {
        $profiles = Profile::all();
        $catalogs = Catalog::all();

        return response()->json([
            'profiles' => $profiles,
            'catalogs' => $catalogs,
        ], Response::HTTP_OK);
    }
}
