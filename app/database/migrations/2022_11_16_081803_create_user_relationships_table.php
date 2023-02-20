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
        Schema::create('user_relationships', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id1');
            $table->bigInteger('user_id2');
            $table->tinyInteger('type')->default(3)->comment("0: family, 1: couple, 2: friend, 3: no_relationship, 4: block");
            $table->tinyInteger('status')->default(1)->comment("0: no accept, 1: accecpt");
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_relationships');
    }
};
