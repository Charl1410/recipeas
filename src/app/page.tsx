// import Image from "next/image";
import { useState, useEffect, use } from "react";
import DishTypeBanner from "./components/DishTypeBanner";
import axios from "axios";
import MealTypeOptions from "./components/MealTypeOptions";
import RecipeCard from "./components/Cards/RecipeCard";
import RootLayout from "./layout";
import RecipeBrowse from "./components/RecipeBrowse";
import { RecipeData } from "./types";
import Banner from "./components/Banners/HomeBanner";
import LowCalRecipe from "./components/LowCalRecipe";


export default function Home() {
  return (
    <main className="">
      <div className="relative w-full h-full">
        <Banner />
        <DishTypeBanner />
      </div>
      <MealTypeOptions />
      {/* map the card data here */}
      <div className="flex flex-wrap justify-evenly h-full">
        <RecipeBrowse />
        <LowCalRecipe />
      </div>
    </main>
  );
}


