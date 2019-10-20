<?php

namespace App\Http\Controllers;

use App\Model\Schedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScheduleController extends Controller
{
    public function create(Request $request)
    {
        $start = strtotime($request->start);
        $end = strtotime($request->end);

        Schedule::create([
            'title' => $request->title,
            'allDay' => $request->allDay,
            'start' => date('y-m-d h:m:s',$start),
            'end' => date('y-m-d h:m:s',$end),
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

        $start = strtotime($request->start);
        $end = strtotime($request->end);

        $schedule->update([
            'title' => $request->title,
            'allDay' => $request->allDay,
            'start' => date('y-m-d h:m:s',$start),
            'end' => date('y-m-d h:m:s',$end),
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

    public function getList()
    {
        $schedules = Schedule::all()->where('user_id', Auth::id());
        return response()->json(['data' => $schedules]);
    }
}
