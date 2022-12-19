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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->integer('total_pay')->nullable();
            $table->integer('pay_number')->nullable();
            # relationships one to many with administrators table
            $table->unsignedBigInteger('admin_id')->nullable();
            $table->foreign('admin_id')
                ->references('id')
                ->on('administrators')
                ->onDelete('set null');
            # Relationships one to one with invoice table
            $table->unsignedBigInteger('invoice_id')->unique();
            $table->foreign('invoice_id')
                ->references('id')
                ->on('invoice')
                ->onDelete('cascade')
                ->onUpdate('cascade');
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
        Schema::dropIfExists('services');
    }
};
