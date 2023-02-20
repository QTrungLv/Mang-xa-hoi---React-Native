<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class L_UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $datas=[[
            'first_name'=>'Nguyễn',
            'last_name'=>'A',
            'is_verified'=>1,
            'sex'=>1,
            'email'=>'nguyenvanlongbg465@gmail.com',
            'phone'=>'0924669885',
            'password'=>'$2y$10$lDrQdCpm2ouRsHSgDvKDUOKPs180OxIbAjWISQYV6tnsdmNynN5Y6'
        ],
        [
            'first_name'=>'Đàm',
            'last_name'=>'Trung',
            'is_verified'=>1,
            'sex'=>1,
            'email'=>'nguyenhaha@gmail.com',
            'phone'=>'0924669886',
            'password'=>'$2y$10$lDrQdCpm2ouRsHSgDvKDUOKPs180OxIbAjWISQYV6tnsdmNynN5Y6'
        ],
         [
            'first_name'=>'Đàm',
            'last_name'=>'Quân',
            'is_verified'=>1,
            'sex'=>1,
            'email'=>'nguyenhaanh@gmail.com',
            'phone'=>'0924669887',
            'password'=>'$2y$10$lDrQdCpm2ouRsHSgDvKDUOKPs180OxIbAjWISQYV6tnsdmNynN5Y6'
         ],
          [
            'first_name'=>'Trung',
            'last_name'=>'Quân',
            'is_verified'=>1,
            'sex'=>1,
            'email'=>'nguyenhaha@gmail.com',
            'phone'=>'0924669888',
            'password'=>'$2y$10$lDrQdCpm2ouRsHSgDvKDUOKPs180OxIbAjWISQYV6tnsdmNynN5Y6'
          ],
          [
            'first_name'=>'Quân',
            'last_name'=>'Đàm',
            'is_verified'=>1,
            'sex'=>1,
            'email'=>'nguyenhaha@gmail.com',
            'phone'=>'0924669889',
            'password'=>'$2y$10$lDrQdCpm2ouRsHSgDvKDUOKPs180OxIbAjWISQYV6tnsdmNynN5Y6'
          ],
          [
            'first_name'=>'Nguyễn',
            'last_name'=>'Tiến',
            'is_verified'=>1,
            'sex'=>1,
            'email'=>'nguyendam@gmail.com',
            'phone'=>'0924669890',
            'password'=>'$2y$10$lDrQdCpm2ouRsHSgDvKDUOKPs180OxIbAjWISQYV6tnsdmNynN5Y6'
          ],
          [
            'first_name'=>'Đàm',
            'last_name'=>'Tiến',
            'is_verified'=>1,
            'sex'=>1,
            'email'=>'nguyentien@gmail.com',
            'phone'=>'0924669891',
            'password'=>'$2y$10$lDrQdCpm2ouRsHSgDvKDUOKPs180OxIbAjWISQYV6tnsdmNynN5Y6'
          ],
          [
            'first_name'=>'Nguyễn',
            'last_name'=>'Hưng',
            'is_verified'=>1,
            'sex'=>1,
            'email'=>'nguyenhung@gmail.com',
            'phone'=>'0924669892',
            'password'=>'$2y$10$lDrQdCpm2ouRsHSgDvKDUOKPs180OxIbAjWISQYV6tnsdmNynN5Y6'
        ]
    ];
        User::insert($datas);
    }
}
