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
      <div className="m-3 w-full md:w-80 rounded-md m-3 w-full md:w-80 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]">
        <div className="h-36 md:h-full overflow-hidden flex items-center justify-center relative">
          <img className="rounded h-[200px] w-full object-cover" src={data.image} alt="recipe image" />
          <button
            type="button"
            aria-label="Add to favourites"
            className="absolute top-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 hover:bg-gray-50"
          >
            <FaHeart className="text-base text-red-500" />
          </button>
        </div>
        <div className="p-4">
          <div className="font-medium mb-1">
            {data ? <h1 className="text-xl">{data.name}</h1> : "Loading..."}
            <div className="px-2 py-1 w-fit rounded-full border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200">
              {data ? <h1>{data.rating} stars</h1> : "Loading..."}
            </div>
          </div>
          <div className="flex flex-col justify-between items-start flex-start py-4">
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
          </div>
          <div className="mt-2 flex justify-star items-center">
            <ViewRecipeButton id={data.id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCard