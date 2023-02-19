<?php

namespace Database\Seeders;

use App\Models\UserRelationship;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class L_RelationSeeder extends Seeder
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
                'user_id1'=>2,
                'user_id2'=>3,
                'type'=>1
              ],
               [
                'user_id1'=>3,
                'user_id2'=>2,
                'type'=>1
               ],
               [
                'user_id1'=>1,
                'user_id2'=>3,
                'type'=>1
               ],
               [
                'user_id1'=>3,
                'user_id2'=>1,
                'type'=>1
               ],
               [
                'user_id1'=>1,
                'user_id2'=>4,
                'type'=>1
               ],
               [
                'user_id1'=>4,
                'user_id2'=>1,
                'type'=>1
               ],
                [
                'user_id1'=>3,
                'user_id2'=>4,
                'type'=>1
               ],
               [
                'user_id1'=>4,
                'user_id2'=>3,
                'type'=>1
               ],
               [
                'user_id1'=>2,
                'user_id2'=>4,
                'type'=>0
               ],
               [
                'user_id1'=>2,
                'user_id2'=>5,
                'type'=>-1
               ],
               [
                'user_id1'=>5,
                'user_id2'=>1,
                'type'=>0
               ],
               [
                'user_id1'=>1,
                'user_id2'=>6,
                'type'=>-1
               ],
               [
                'user_id1'=>1,
                'user_id2'=>7,
                'type'=>-1
               ],
               [
                'user_id1'=>1,
                'user_id2'=>8,
                'type'=>0
               ],
                [
                'user_id1'=>4,
                'user_id2'=>9,
                'type'=>1
               ],
                [
                'user_id1'=>9,
                'user_id2'=>4,
                'type'=>1
               ],
               ];
               UserRelationship::insert($datas);
    }
}
