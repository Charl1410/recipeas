"use client"
import React from 'react'
import RecipeCard from './Cards/RecipeCard'
import { useState, useEffect } from "react";
import axios from "axios";
import { RecipeData } from '../types';

const RecipeBrowse: React.FC<{ RecipeData: RecipeData }> = ({ RecipeData }) => {
  //store data here
  const [RecipeCardData, setData] = useState(null);
  const [recipeOne, setRecipeOne] = useState(null)
  const apiUrl = "https://dummyjson.com/recipes";

  //define object 1 aka recipe 1 and try to take it through to recipeCard 

  useEffect(() => {
    console.log("effect is running");

    const getData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log("Response:", response.data);
        setData(response.data);
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
    <div>
      <RecipeCard recipe={recipeOne} />
    </div>
  );
};

export default RecipeBrowse