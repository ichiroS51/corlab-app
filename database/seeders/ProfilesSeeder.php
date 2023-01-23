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
            'name' => 'Perfil Hematológico'
        ]);
        Profile::create([
            'name' => 'Perfil Bioquímico'
        ]);
        Profile::create([
            'name' => 'Perfil Coagulación'
        ]);
        Profile::create([
            'name' => 'Perfil Serológico'
        ]);
        Profile::create([
            'name' => 'Perfil Enzimático'
        ]);
        Profile::create([
            'name' => 'Coproanálisis'
        ]);
        Profile::create([
            'name' => 'Uroanálisis'
        ]);
        Profile::create([
            'name' => 'Prueba de Embarazo'
        ]);
    }
}
