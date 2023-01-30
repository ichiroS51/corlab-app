<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ProfilesController;
use App\Http\Controllers\AdminControllers\AdminTestsController;
use App\Http\Controllers\AdminControllers\AdminUsersController;
use App\Http\Controllers\AdminControllers\AdminInvoiceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

Route::post('/test-info', [ClientController::class, 'storeClient']);
Route::post('/test-method', [InvoiceController::class, 'geInvoice']);
Route::post('/test-pay', [InvoiceController::class, 'pay']);
Route::get('/profiles', [ProfilesController::class, 'index']);

Route::get('/invoices', [AdminInvoiceController::class, 'index']);
Route::post('/edit-invoice', [AdminInvoiceController::class, 'edit']);
Route::get('/tests', [AdminTestsController::class, 'index']);
Route::post('/edit', [AdminTestsController::class, 'edit']);
Route::post('/create-user', [AdminUsersController::class, 'create']);
Route::get('/show-users', [AdminUsersController::class, 'show']);

// Auths
Route::post('/login', [AuthController::class, 'login']);
Route::post('/admin-login', [AuthController::class, 'adminLogin']);
Route::post('/logout', [AuthController::class, 'logout']);
