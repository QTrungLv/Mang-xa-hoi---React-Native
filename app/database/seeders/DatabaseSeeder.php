<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        // $this->call(UserSeeder::class);
        // $this->call(PostSeeder::class);
        $this->call(L_UserSeeder::class);
        $this->call(L_UserInfoSeeder::class);
        $this->call(L_PostSeeder::class);
        $this->call(L_ImageSeeder::class);
        $this->call(L_RelationSeeder::class);
        $this->call(ChannelSeeder::class);
        $this->call(UserChannelSeeder::class);
    }
}
