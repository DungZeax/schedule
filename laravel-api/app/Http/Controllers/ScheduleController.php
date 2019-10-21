<?php

namespace App\Http\Controllers;

use App\Model\Schedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScheduleController extends Controller
{
    public function create(Request $request)
    {
        Schedule::create([
            'title' => $request->title,
            'allDay' => $request->allDay,
            'start' => $request->start,
            'end' => $request->end,
            'user_id' => Auth::id(),
        ]);

        $schedules = Schedule::all()->where('user_id', Auth::id());

        return response()->json([
            'message' => 'Created',
            'data' => $schedules,
        ], 201);

    }

    public function update(Request $request)
    {
        $schedule = Schedule::find($request->id);
        if (!$schedule->user_id === Auth::id()) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $schedule->update([
            'title' => $request->title,
            'allDay' => $request->allDay,
            'start' => $request->start,
            'end' => $request->end,
        ]);
        $schedules = Schedule::all()->where('user_id', Auth::id());
        return response()->json([
            'message' => 'updated',
            'data' => $schedules
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

    public function getList()
    {
        $schedules = Schedule::all()->where('user_id', Auth::id());
        return response()->json(['data' => $schedules]);
    }
}
