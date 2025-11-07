<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->constrained()->onDelete('cascade');


            //Utile pour la contextualisation des utilisateurs non authentifiés
            $table->string('initial_domaine')->nullable();
            $table->unsignedSmallInteger('initial_experience_years');


            //Nom du profile
            $table->string('name');
            $table->boolean('is_default')->default(false);

            // Données brutes du cv
            $table->json('personal_info')->nullable();
            $table->text('summary')->nullable();
            $table->json('experiences')->nullable();
            $table->json('education')->nullable();
            $table->json('skills')->nullable();
            $table->json('languages')->nullable();


            // Cache pour les suggestions de l'IA
            $table->json('suggested_skills')->nullable();

            // Pour les sections personnalisées du cv
            $table->json('custom_sections')->nullable();

            $table->unique(['user_id', 'name']); // Faire en sorte que le couple user_id et name soit unique

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
