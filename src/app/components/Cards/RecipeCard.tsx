"use client"
import React from 'react'
import { FaHeart } from "react-icons/fa";
import StarRating from '../StarRating';
import { RecipeData } from '@/app/types';
import ViewRecipeButton from '../Buttons/ViewRecipeButton';

//passing in the data types into the component 
interface RecipeCardProps {
  data: RecipeData;
}

const RecipeCard: React.FC<RecipeCardProps> = ({data}) => {
  return (
    <>
      <div className="m-3 w-full md:w-80 h-fit rounded-md shadow-md">
        <div className="h-36 md:h-full overflow-hidden flex items-center justify-center">
          <img className="rounded" src={data.image} alt="recipe image" />
        </div>
        <div className="p-4">
          <div className="font-bold border-b border-gray-300">
            {data ? <h1 className="text-xl">{data.name}</h1> : "Loading..."}
            <div className="">
              <StarRating />
            </div>
          </div>
          <p className="hidden md:flex flex-row">
            <span className="font-bold mr-1">Diffuculty:</span>
            {data ? <h1>{data.difficulty}</h1> : "Loading..."}
          </p>
          <p className="hidden md:flex flex-row">
            <span className="font-bold mr-1"> Prep time:</span>
            {data ? <h1>{data.prepTimeMinutes}</h1> : "Loading..."} mins
          </p>
          <p className="hidden md:flex flex-row">
            <span className="font-bold mr-1"> Cooking time:</span>
            {data ? <h1>{data.cookTimeMinutes}</h1> : "Loading..."}mins
          </p>
          <p className="hidden md:flex flex-row">
            <span className="font-bold mr-1">Cuisine:</span>
            {data ? <h1>{data.cuisine}</h1> : "Loading..."}
          </p>
          <p className="hidden md:flex flex-row">
            <span className="font-bold mr-1">Calories per serving:</span>
            {data ? <h1>{data.caloriesPerServing}</h1> : "Loading..."}
            cal
          </p>
          <div className="mt-2 flex justify-center items-center">
            <ViewRecipeButton id={data.id} />
            <button>
              <FaHeart className="ml-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCard