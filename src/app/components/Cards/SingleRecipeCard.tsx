import React from 'react'
import { RecipeData } from '../../types';
import Link from 'next/link';
import { IoIosArrowRoundBack } from "react-icons/io";


const SingleRecipeCard: React.FC<RecipeData> = ({
  name,
  cuisine,
  prepTimeMinutes,
  cookTimeMinutes,
  caloriesPerServing,
  instructions,
  ingredients,
  image,
  rating
}) => {
  return (
    <div className="bg-slate-100 h-full flex-col flex items-center justify-center">
      <div className="flex flex-row">
        <Link href="/">
          <p className="flex flex-row items-center justify-center">
            <IoIosArrowRoundBack
              style={{ color: "black", fontSize: "30px" }}
              className="mr-2"
            />
            Back to home
          </p>
        </Link>
      </div>

      <div className="bg-white mb-10 gbg-white w-11/12 h-full flex flex-col md:flex-row shadow-lg">
        <div className="image h-full w-full md:w-4/12 md:h-full">
          <img
            className=" w-full h-full object-cover"
            src={image}
            alt="recipe image"
          />
          <div className="">{rating}</div>
        </div>
        <div className="p-6 recipe h-full w-full md:w-8/12">
          <div className="bg-white flex flex-col h-full mt-4 w-11/12">
            <h1 className="text-center w-full flex justify-center items-center text-4xl font-bold border-b border-gray-400">
              {name}
            </h1>
          </div>
          <div className="p-10 w-full items-center flex flex-col md:flex-row justify-evenly dish-details h-full">
            <div className="mb-2 w-fit p-1.5 border-gray-200 bg-slate-300 rounded-full border-b text-sm ">
              {caloriesPerServing} cals
            </div>
            <div className="mb-2 w-fit p-1.5 border-gray-200 bg-slate-300 rounded-full border-b text-sm">
              {prepTimeMinutes} mins prep time
            </div>
            <div className="mb-2 w-fit p-1.5 border-gray-200 bg-slate-300 rounded-full border-b text-sm">
              {cookTimeMinutes} mins cook time
            </div>
            <div className="mb-2 w-fit p-1.5 border-gray-200 bg-slate-300 rounded-full border-b text-sm">
              {cuisine}
            </div>
          </div>
          <div className="">
            <h1 className="mt-4 font-bold text-lg border-b border-gray-200">
              Ingredients
            </h1>
            <ul className="">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="mt-2">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 ingredients">
            <h1 className="font-bold text-lg border-b border-gray-200">
              Method
            </h1>

            <ul className="instructions">
              {instructions.map((instruction, index) => (
                <li key={index} className="mt-2">
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeCard