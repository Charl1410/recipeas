import React from 'react'
import { FaHeart } from "react-icons/fa";
import StarRating from '../StarRating';



const RecipeCard = () => {
  return (
    <div className="p-1 w-2/12 h-fit border-2 border-slate-500 rounded-md ">
      <div className="imageContainer">
        <img className="rounded" src="/images/lunch.jpeg" alt="" />
      </div>
      <div className="p-2">
        <div className="font-bold border-b border-gray-300">
          <h1>Salad</h1>
          <div className="">
         <StarRating />
          </div>
        </div>
        <p>
          <span className="text-pink-500 font-bold">Diffuculty:</span> Hard
        </p>
        <p>
          <span className="text-pink-500 font-bold"> Cooking time:</span> 20
          mins
        </p>
        <p>
          <span className="text-pink-500 font-bold">Cuisine: </span> Italian
        </p>
        <p>
          <span className="text-pink-500 font-bold">Calories per serving:</span>
          300cal
        </p>
      </div>
      <div className="mt-2 flex justify-center items-center">
        <button className="border-1 border-pink-500 bg-pink-200 p-1 rounded-xl w-8/12">
          View full recipe
        </button>
        <button>
          <FaHeart className="ml-4" />
        </button>
      </div>
    </div>
  );
}

export default RecipeCard