<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Profile;

class ProfilesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Profile::create([
            'name' => 'Perfil Hematológico',
            'price' => 10,
        ]);
        Profile::create([
            'name' => 'Perfil Bioquímico',
            'price' => 40,
        ]);
        Profile::create([
            'name' => 'Perfil Coagulación',
            'price' => 12,
        ]);
        Profile::create([
            'name' => 'Perfil Serológico',
            'price' => 30,
        ]);
        Profile::create([
            'name' => 'Perfil Enzimático',
            'price' => 20,
        ]);
        Profile::create([
            'name' => 'Coproanálisis',
            'price' => 5,
        ]);
        Profile::create([
            'name' => 'Uroanálisis',
            'price' => 5,
        ]);
        Profile::create([
            'name' => 'Prueba de Embarazo',
            'price' => 10,
        ]);
    }
}
