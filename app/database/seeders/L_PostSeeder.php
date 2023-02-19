<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class L_PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $datas=[
            [
                'user_id'=>1,
                'content'=>'Đây là post 1',
            ],
            [
                'user_id'=>1,
                'content'=>'Đây là post 2',
            ]
            ];
            Post::insert($datas);
    }
}
