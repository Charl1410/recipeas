"use client"
import React from 'react'
import RecipeCard from './Cards/RecipeCard'
import { useState, useEffect } from "react";
import axios from "axios";
import { RecipeData } from '../types';

const RecipeBrowse: React.FC = () => {
  //store data here
  const [RecipeCardData, setData] = useState<any>(null);
  const [recipeOne, setRecipeOne] = useState<any>(null)
  const apiUrl = "https://dummyjson.com/recipes";

  //define object 1 aka recipe 1 and try to take it through to recipeCard 

  useEffect(() => {
    console.log("effect is running");

    const getData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log("Response:", response.data);
        setData(response.data.recipes);
        setRecipeOne(response.data.recipes[0])
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getData();
  }, []);

    useEffect(() => {
      console.log("Recipe 1", recipeOne);
    }, [recipeOne]);

  return (
    <div className='flex flex-wrap justify-center intems-center flex-col lg:flex-row'>
      {/* if there is data then map the data */}
      {RecipeCardData && RecipeCardData.map((recipe: any, index: number) => (
        <RecipeCard key={index} data={recipe} />
      ))}
    </div>
  );
};

export default RecipeBrowse