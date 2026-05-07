'use client'
import React from 'react'
import '../Custom.css'
import "@mantine/carousel/styles.css";
import RecipeCarousel from './Carousels/RecipeCarousel';

const LowCalRecipe = () => {
  return (
    <div className='mt-10 flex flex-col items-center justify-center'>
       <div className="w-full flex flex-col items-center justify-center gap-4 mb-4">
        <h1 className="text-4xl">Low Calorie Recipes</h1>
        <p className="text-xl text-grey mb-2">Browse our collection of low calorie recipes. We have a wide range of recipes to choose from.</p>
      </div>
      <RecipeCarousel />
    </div>
  );
}

export default LowCalRecipe