<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('provider_id')->after('password')->nullable();
            $table->string('provider_name')->after('provider_id')->nullable();
            $table->longText('provider_token')->after('provider_name')->nullable();
            $table->longText('provider_refresh_token')->after('provider_token')->nullable();
            $table->longText('profile_image')->nullable()->after('provider_refresh_token');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['provider_id', 'provider_name', 'provider_token', 'provider_refresh_token', 'profile_image']);
        });
    }
};
