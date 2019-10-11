<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = [
        'username',
        'password',
    ];

    protected $hidden = [
        'password',
        'created_at',
        'updated_at',
    ];
}
