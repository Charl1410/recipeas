"use client"
import React from 'react'
import RecipeCard from './Cards/RecipeCard'
import { useState, useEffect } from "react";
import axios from "axios";
import { RecipeData } from '../types';
import { getRecipes } from '../api/getRecipes'; //importing the API func

const RecipeBrowse: React.FC = () => {
  //store data here
  const [RecipeCardData, setData] = useState<any>(null);
  const apiUrl = "https://dummyjson.com/recipes";

  useEffect(() => {
    //function to fetch data 
    const fetchData = async () => {
      const recipes = await getRecipes(); // Call the API function
      setData(recipes);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Recipes", RecipeCardData);
  }, [RecipeCardData]);

  return (
    <div>
      <h1 className="text-center w-full font-bold text-2xl border-b border-slate-200">
        Browse
      </h1>
      <div className="flex flex-wrap justify-center items-center flex-col md:flex-row">
        {/* if there is data then map the data only the first 10 items  */}
        {RecipeCardData &&
          RecipeCardData.slice(0, 10).map((recipe: any, index: number) => (
            <RecipeCard key={index} data={recipe} />
          ))}
      </div>
    </div>
  );
};

export default RecipeBrowse