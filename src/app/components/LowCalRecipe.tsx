'use client'
import React from 'react'
import '../Custom.css'
import "@mantine/carousel/styles.css";
import RecipeCarousel from './Carousels/RecipeCarousel';

const LowCalRecipe = () => {
  return (
    <div className='border-2 border-black mt-10 flex flex-col items-center justify-center p-10'>
      <h1 className='w-full font-bold text-lg border-b border-slate-200 mb-10'>Browse Low Calorie options</h1>
      <RecipeCarousel />
    </div>
  );
}

export default LowCalRecipe