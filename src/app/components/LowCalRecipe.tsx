'use client'
import React from 'react'
import '../Custom.css'
import "@mantine/carousel/styles.css";
import RecipeCarousel from './Carousels/RecipeCarousel';

const LowCalRecipe = () => {
  return (
    <div className="flex justify-center items-center clip-path height-40 bg-slate-100 w-full border-2 border-black">
      <RecipeCarousel />
    </div>
  );
}

export default LowCalRecipe