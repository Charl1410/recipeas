"use client"

import React from 'react'
import DishVariation from './DishVariation';

const DishTypeBanner = () => {
  return (
    <div className="asolute h-36 border-2 border-black flex flex-row justify-evenly items-center">
      <DishVariation />
      <div className="items-center flex justify-center text-center rounded-full w-32 h-32 border-black border-2">
        <p>Chinese</p>
      </div>
      <div className="items-center flex justify-center text-center rounded-full w-32 h-32 border-black border-2">
        <p>Japanese</p>
      </div>
      <div className="items-center flex justify-center text-center rounded-full w-32 h-32 border-black border-2">
        <p>Thai</p>
      </div>
      <div className="items-center flex justify-center text-center rounded-full w-32 h-32 border-black border-2">
        <p>English</p>
      </div>
      <div className="items-center flex justify-center text-center rounded-full w-32 h-32 border-black border-2">
        <p>Italian</p>
      </div>
    </div>
  );
}

export default DishTypeBanner