<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class L_UserInfoSeeder extends Seeder
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
                'avatar'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/1%2FImage%2Favatar.png?alt=media&token=7d2c6992-1d42-4541-a55b-64d04c680835',
                'birthday'=>null,
                'description'=>'',
                'city'=>'',
                'country'=>''
            ],
            [
                'user_id'=>2,
                'avatar'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/2%2Favatar.png?alt=media&token=23d75a7b-645c-4dd3-b7f4-8dced087c93b',
                'birthday'=>null,
                'description'=>'',
                'city'=>'',
                'country'=>''
            ],
            [
                'user_id'=>3,
                'avatar'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/3%2FImage%2Favatar.jfif?alt=media&token=5df916a1-ea81-48f6-a8f5-b19bc5989020',
                'birthday'=>null,
                'description'=>'',
                'city'=>'',
                'country'=>''
            ],
            [
                'user_id'=>4,
                'avatar'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/4%2FImage%2Favatar.jpg?alt=media&token=3fc3cc15-ed41-4297-9519-d147c30ecf26',
                'birthday'=>null,
                'description'=>'',
                'city'=>'',
                'country'=>''
            ],
            [
                'user_id'=>5,
                'avatar'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/5%2FImage%2Favatar.jfif?alt=media&token=8b3d74bc-baa1-4a59-ac91-15da2a7bb4ca',
                'birthday'=>null,
                'description'=>'',
                'city'=>'',
                'country'=>''
            ],
            [
                'user_id'=>6,
                'avatar'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/6%2FImage%2Favatar.jfif?alt=media&token=da7b707e-bb9c-439d-b89e-586cc42e00ac',
                'birthday'=>null,
                'description'=>'',
                'city'=>'',
                'country'=>''
            ],
            [
                'user_id'=>7,
                'avatar'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/7%2FImage%2Favatar.jfif?alt=media&token=b8d9fdc0-0c06-423f-bc8d-1899d29e7bbd',
                'birthday'=>null,
                'description'=>'',
                'city'=>'',
                'country'=>''
            ],
            [
                'user_id'=>8,
                'avatar'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/8%2FImage%2Favatar.jpg?alt=media&token=2ba20ac0-bf19-46fc-9917-8a1a4e6587c6',
                'birthday'=>null,
                'description'=>'',
                'city'=>'',
                'country'=>''
            ],
            [
                'user_id'=>9,
                'avatar'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/9%2FImage%2Favatar.jfif?alt=media&token=2418b364-918f-4d21-b911-7d7ebcdf071d',
                'birthday'=>null,
                'description'=>'',
                'city'=>'',
                'country'=>''
            ]

            ];
            DB::table('info_users')->insert($datas);
    }
}
