<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Catalog;

class CatalogsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Catalog::create([
            'price' => 10,
            'profile_id' => 1
        ]);
        Catalog::create([
            'price' => 40,
            'profile_id' => 2
        ]);
        Catalog::create([
            'price' => 12,
            'profile_id' => 3
        ]);
        Catalog::create([
            'price' => 30,
            'profile_id' => 4
        ]);
        Catalog::create([
            'price' => 20,
            'profile_id' => 5
        ]);
        Catalog::create([
            'price' => 5,
            'profile_id' => 6
        ]);
        Catalog::create([
            'price' => 5,
            'profile_id' => 7
        ]);
        Catalog::create([
            'price' => 10,
            'profile_id' => 8
        ]);
    }
}
