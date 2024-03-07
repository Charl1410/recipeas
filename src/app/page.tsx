// import Image from "next/image";
import { useState, useEffect, use } from "react";
import DishTypeBanner from "./components/DishTypeBanner";
import axios from "axios";
import MealTypeOptions from "./components/MealTypeOptions";

export default function Home() {


  return (
    <main className="">
      <div className="relative">
        <img
          className="w-full h-2/3 object-cover"
          src="/images/banner.jpeg"
          alt="banner"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold">
          R E C I P E A S
        </h1>
        <p className="absolute mt-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl">
          All your favourite dishes all in one place!
        </p>
      </div>
      <DishTypeBanner />
      <MealTypeOptions /> 
    </main>
  );
}


