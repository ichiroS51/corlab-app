<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $fillable = ['user_ci', 'firstname', 'lastname', 'email', 'phone_number'];
}
