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
                'content'=>'Chào bạn mình là Nguyễn Văn A. Mình viết post 1 nhé',
            ]
            ,
            [
                'user_id'=>2,
                'content'=>'Chào bạn mình là Đàm Quân Trung. Đây là post của mình',
            ],
            [
                'user_id'=>2,
                'content'=>'Chào bạn mình là Đàm Quân Trung. Đây là post của mình',
            ],
             [
                'user_id'=>3,
                'content'=>'Chào bạn mình là Trung Quân. Đây là post của mình',
            ],
            [
                'user_id'=>3,
                'content'=>'Chào bạn mình là Trung Quân. Đây là post của mình',
            ],
             [
                'user_id'=>4,
                'content'=>'Chào bạn mình là Quân Trung Đàm. Đây là post của mình',
            ],
            [
                'user_id'=>4,
                'content'=>'Chào bạn mình là Trung Đàm Quân. Đây là post của mình',
            ],
             [
                'user_id'=>4,
                'content'=>'Chào bạn mình là Trung Đàm Quân. Đây là post của mình',
            ]
            ];
            Post::insert($datas);
    }
}
