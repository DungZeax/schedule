<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', 'Auth\AuthController@register');
Route::post('login', 'Auth\AuthController@authenticate');

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::group([
        'prefix' => 'booking',
    ], function () {
        Route::post('create', 'ScheduleController@create');
        Route::post('update/{id}', 'ScheduleController@update');
        Route::get('getList', 'ScheduleController@getList');
        Route::delete('delete/{id}', 'ScheduleController@delete');
    });
    Route::get('logout', 'Auth\AuthController@logout');
    Route::get('user', 'Auth\AuthController@getAuthenticatedUser');
});
