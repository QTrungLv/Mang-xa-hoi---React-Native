<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Image;
class L_ImageSeeder extends Seeder
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
                'post_id'=>1,
                'index'=>1,
                'name'=>'1/Image/1_1.png',
                'link'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/1%2FImage%2F1_1.png?alt=media&token=8732d736-69ad-4333-9a82-6d39c4041441',
                'type'=>'Image'
            ],
             [
                'post_id'=>1,
                'index'=>2,
                'name'=>'1/Image/1_2.png',
                'link'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/1%2FImage%2F1_2.png?alt=media&token=885e5dd5-05c6-412e-bf26-3c5394774801',
                'type'=>'Image'
            ],
             [
                'post_id'=>1,
                'index'=>3,
                'name'=>'1/Image/1_3.png',
                'link'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/1%2FImage%2F1_3.png?alt=media&token=be62f2bb-e9d3-46e6-8f99-9f92cbef612e',
                'type'=>'Image'
            ],
             [
                'post_id'=>1,
                'index'=>4,
                'name'=>'1/Image/1_4.png',
                'link'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/1%2FImage%2F1_4.png?alt=media&token=75ea11ec-4de7-48fb-b82a-895cbe8644a5',
                'type'=>'Image'
            ],
            [
                'post_id'=>2,
                'index'=>1,
                'name'=>'2/Image/2_1.png',
                'link'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/2%2FImage%2F2_1.png?alt=media&token=1adc36b9-3928-408f-88fd-6d0e905d4013',
                'type'=>'Image'
            ],
             [
                'post_id'=>2,
                'index'=>2,
                'name'=>'2/Image/2_2.png',
                'link'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/2%2FImage%2F2_2.png?alt=media&token=bd00345f-e63b-489a-b9c4-7479fc642787',
                'type'=>'Image'
             ],
              [
                'post_id'=>3,
                'index'=>1,
                'name'=>'2/Image/3_1.png',
                'link'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/2%2FImage%2F3_1.jpg?alt=media&token=f84296d0-d1f2-4484-af8d-1568e2927b22',
                'type'=>'Image'
            ],
             [
                'post_id'=>4,
                'index'=>1,
                'name'=>'3/Image/4_1.jpg',
                'link'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/3%2FImage%2F4_1.jpg?alt=media&token=43e503f8-ca97-4321-bcc3-b15814b86ba3',
                'type'=>'Image'
             ],
              [
                'post_id'=>5,
                'index'=>1,
                'name'=>'3/Image/5_1.jfif',
                'link'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/3%2FImage%2F5_1.jfif?alt=media&token=b5f84822-6b0e-4031-a354-83d9a04894dd',
                'type'=>'Image'
              ],
               [
                'post_id'=>6,
                'index'=>1,
                'name'=>'4/Image/6_1.jfif',
                'link'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/4%2FImage%2F6_1.jfif?alt=media&token=44821df2-301e-448d-866e-84327062e364',
                'type'=>'Image'
               ],
                [
                'post_id'=>7,
                'index'=>1,
                'name'=>'4/Image/7_1.jfif',
                'link'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/4%2FImage%2F7_1.jfif?alt=media&token=25606f37-c736-4e58-ad77-306624b95d32',
                'type'=>'Image'
                ],
                 [
                'post_id'=>8,
                'index'=>1,
                'name'=>'4/Image/8_1.jfif',
                'link'=>'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/4%2FImage%2F8_1.jfif?alt=media&token=29ef9447-0a43-4fd9-976c-9a8d82c732c5',
                'type'=>'Image'
            ]
            ];
            Image::insert($datas);
    }
}
