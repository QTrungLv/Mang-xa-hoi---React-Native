<?php

namespace Database\Seeders;

use App\Models\Channel;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserChannelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i =1; $i <= 14; $i++) {
            $channel = Channel::find($i);
            $user_id1 = fake()->numberBetween(1, 100);
            $user_id2 = fake()->numberBetween(1,100);
            while ($user_id1 == $user_id2) {
                $user_id2 = fake()->numberBetween(1, 100);
            }
            $channel->users()->attach([
               $user_id1,$user_id2
            ]);
        }
    }
}
