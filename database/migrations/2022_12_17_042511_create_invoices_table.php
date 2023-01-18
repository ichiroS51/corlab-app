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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('result_path')->nullable();
            $table->integer('pay_number')->nullable();
            $table->integer('total_pay')->nullable();
            # relationships one to many with clients table
            $table->unsignedBigInteger('user_ci')->nullable();
            $table->foreign('user_ci')
                ->references('user_ci')
                ->on('clients')
                ->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
};
