<?php

namespace App\Http\Controllers;

use App\Model\Schedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScheduleController extends Controller
{
    public function create(Request $request)
    {

        $schedule = Schedule::create([
            'name' => $request->name,
            'time_start' => $request->time_start,
            'time_end' => $request->time_end,
            'user_id' => Auth::id(),
        ]);

        return response()->json([
            'message' => 'Created',
            'data' => $schedule,
        ], 201);

    }

    public function update(Request $request)
    {
        $schedule = Schedule::find($request->id);
        if (!$schedule->user_id === Auth::id()) {
            return response()->json(['message' => 'Forbidden'], 403);
        }
        $schedule->update([
            'name' => $request->name,
            'time_start' => $request->time_start,
            'time_end' => $request->time_end,
        ]);
        return response()->json([
            'message' => 'updated',
            'data' => $schedule
        ], 200);
    }

    public function delete(Request $request)
    {
        $schedule = Schedule::find($request->id);
        if (!$schedule->user_id === Auth::id()) {
            return response()->json(['message' => 'Forbidden'], 400);
        }
        $schedule->delete();

        return response()->json([
            'message' => 'Deleted',
            'data' => $schedule,
        ], 200);
    }

    public function getList(Request $request)
    {
        return Schedule::all()->where('user_id', Auth::id());
    }
}
