<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_codes',function(Blueprint $table) {
         
            $table->boolean('verify')->default(false)->after('code');
            $table->timestamp('expire_at')->nullable()->after('verify');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_codes', function (Blueprint $table){
            $table->dropColumn('verify');
            $table->dropColumn('expire_at');
        });
    }
};
