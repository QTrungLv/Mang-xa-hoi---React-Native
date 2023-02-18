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
                'name'=>'1/Image/1_1.jpg',
                'link'=>'https://storage.googleapis.com/okggggg-fc02e.appspot.com/1/Image/2_1.jpg?GoogleAccessId=firebase-adminsdk-jswaf%40okggggg-fc02e.iam.gserviceaccount.com&Expires=1697907600&Signature=SKQJpvc9dexeu9klKaLpb92prL8Hs%2Bn8Geh3j52mjgx46%2Btrs3g%2FcMG7hPyGppq%2B04Ntx7iqo8%2BlW%2BjVnspBTaNstq2yarNdkOm4cI0ITVq0Cbhxan1Tk5URNwv0ijV%2B9gG9z4e02yx0MvhLacxuK13W0TDd%2B3EAPTfJS3nqD%2FpvQ8HYBQk6bZFct2xsU%2BR%2F1QlOD0WfKypl0IZD694t4NFyzb8LL5hEcigzclTiHfXPp7K8S9c51SP0MuiDLYNH1gi2HP3iMEwElVYVF4uVtzHChCZLy8ynGhcaOwUWnvb4r0VNI1evf%2BoFBEH4krvl%2FJOiq6tDhAPAVPCOW7UepQ%3D%3D&generation=1676644592226214',
                'type'=>'Image'
            ],
            [
                'post_id'=>2,
                'index'=>1,
                'name'=>'1/Image/2_1.jpg',
                'link'=>'https://storage.googleapis.com/okggggg-fc02e.appspot.com/1/Image/2_1.jpg?GoogleAccessId=firebase-adminsdk-jswaf%40okggggg-fc02e.iam.gserviceaccount.com&Expires=1697907600&Signature=SKQJpvc9dexeu9klKaLpb92prL8Hs%2Bn8Geh3j52mjgx46%2Btrs3g%2FcMG7hPyGppq%2B04Ntx7iqo8%2BlW%2BjVnspBTaNstq2yarNdkOm4cI0ITVq0Cbhxan1Tk5URNwv0ijV%2B9gG9z4e02yx0MvhLacxuK13W0TDd%2B3EAPTfJS3nqD%2FpvQ8HYBQk6bZFct2xsU%2BR%2F1QlOD0WfKypl0IZD694t4NFyzb8LL5hEcigzclTiHfXPp7K8S9c51SP0MuiDLYNH1gi2HP3iMEwElVYVF4uVtzHChCZLy8ynGhcaOwUWnvb4r0VNI1evf%2BoFBEH4krvl%2FJOiq6tDhAPAVPCOW7UepQ%3D%3D&generation=1676644592226214',
                'type'=>'Image'
            ]
            ];
            Image::insert($datas);
    }
}
