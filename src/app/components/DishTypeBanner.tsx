"use client"

import React from 'react'
import DishVariation from './DishVariation';

const DishTypeBanner = () => {
  return (
    <div className="m-6 asolute h-48 border-2 flex flex-row justify-evenly items-center">
      <DishVariation />
      <div className="relative items-center flex justify-center text-center rounded-full w-36 h-36 border-2 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/images/chinese.jpeg"
          alt=""
        />
        <p className="absolute text-white font-bold">Chinese</p>
      </div>
      <div className="relative items-center flex justify-center text-center rounded-full w-36 h-36 border-2 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/images/japanese.jpeg"
          alt=""
        />
        <p className="absolute text-white font-bold">Japanese</p>
      </div>
      <div className="relative items-center flex justify-center text-center rounded-full w-36 h-36 border-2 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/images/thai.jpeg"
          alt=""
        />
        <p className="absolute text-white font-bold">Thai</p>
      </div>
      <div className="relative items-center flex justify-center text-center rounded-full w-36 h-36 border-2 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/images/roast.jpeg"
          alt=""
        />
        <p className="absolute text-white font-bold">British</p>
      </div>
      <div className="relative items-center flex justify-center text-center rounded-full w-36 h-36 border-2 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/images/pizza.jpeg"
          alt=""
        />
        <p className="absolute text-white font-bold">Italian</p>
      </div>
    </div>
  );
}

export default DishTypeBanner