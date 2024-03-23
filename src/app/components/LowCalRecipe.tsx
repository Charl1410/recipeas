'use client'
import React from 'react'
import '../Custom.css'
import "@mantine/carousel/styles.css";
import RecipeCarousel from './Carousels/RecipeCarousel';

const LowCalRecipe = () => {
  return (
    <div className='mt-10 w-full flex flex-col items-center justify-center h-full p-10 bg-slate-100'>
      <h1 className='w-full font-bold text-lg border-b border-slate-200 mb-10'>Browse Low Calorie options</h1>
      {/* <div className="flex justify-center items-center clip-path height-40 bg-slate-100 w-full border-2 border-black"></div> */}
      <RecipeCarousel />
    </div>
  );
}

export default LowCalRecipe