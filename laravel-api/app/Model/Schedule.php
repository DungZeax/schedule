<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    protected $fillable = [
        'name',
        'time_start',
        'time_end',
        'user_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }
}
