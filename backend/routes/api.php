<?php

use App\Http\Controllers\CustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::resource('customers', CustomerController::class)->except(['create', 'edit']);
Route::resource('nocustomers', CustomerController::class)->except(['create', 'edit']);
