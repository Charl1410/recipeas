"use client"
import React from 'react'
import RecipeCard from './Cards/RecipeCard'
import { useState, useEffect } from "react";
import { getRecipes } from '../api/getRecipes'; //importing the API func


type RecipeBrowseProps = {
  limit?: number;
}

const RecipeBrowse: React.FC<RecipeBrowseProps> = ({limit = 10}) => {

  //store data here
  const [RecipeCardData, setData] = useState<any>(null);

  useEffect(() => {
    //function to fetch data 
    const fetchData = async () => {
      const recipes = await getRecipes(); // Call the API function
      setData(recipes);
    };

    fetchData();
  }, []);

  return (
    <>
        <div className="mt-10 border-t border-slate-200">
          <div className="w-full flex flex-wrap justify-center items-center flex-col md:flex-row">
            {/* if there is data then map the data only the first 10 items  */}
            {RecipeCardData &&
              RecipeCardData.map((recipe: any, index: number) => (
                <RecipeCard key={index} data={recipe} />
              ))}
          </div>
        </div>
     
    </>
  );
};

export default RecipeBrowse