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
        Schema::create('templates', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('path')->unique(); // Chemin vers le template
            $table->timestamps();
        });

        Schema::create('template_template_category', function(Blueprint $table){
            $table->foreignId('template_id')->constrained()->onDelete('cascade');
            $table->foreignId('template_category_id')->constrained()->onDelete('cascade');
            $table->primary(['template_id', 'template_category_id']);
        });

        Schema::create('expertise_level_template', function(Blueprint $table){
            $table->foreignId('expertise_level_id')->constrained()->cascadeOnDelete();
            $table->foreignId('template_id')->constrained()->cascadeOnDelete();
            $table->primary(['expertise_level_id', 'template_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

        Schema::table('expertise_level_template', function (Blueprint $table) {
            $table->dropForeign(['expertise_level_id']);
            $table->dropForeign(['template_id']);
        });

        Schema::table('template_template_category', function (Blueprint $table) {
            $table->dropForeign(['template_id']);
            $table->dropForeign(['template_category_id']);
        });
 
        Schema::dropIfExists('expertise_level_template');

        Schema::dropIfExists('template_template_category');

        Schema::dropIfExists('templates');
    }
};
