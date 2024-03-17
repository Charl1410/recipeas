// import Image from "next/image";
import { useState, useEffect, use } from "react";
import DishTypeBanner from "./components/DishTypeBanner";
import axios from "axios";
import MealTypeOptions from "./components/MealTypeOptions";
import RecipeCard from "./components/Cards/RecipeCard";
import RootLayout from "./layout";
import RecipeBrowse from "./components/RecipeBrowse";
import { RecipeData } from "./types";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

export default function Home() {


  return (
    <main className="">
      <NavBar />
      <div className="relative w-full h-full">
        <Banner />
      </div>
      <MealTypeOptions />
      {/* map the card data here */}
      <div className="m-6 flex flex-wrap p-4 justify-evenly h-full">
        <RecipeBrowse />
      </div>
      <Footer />
    </main>
  );
}


