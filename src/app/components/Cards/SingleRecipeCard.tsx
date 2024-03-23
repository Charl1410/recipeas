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
  image
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

      <div className="bg-white mb-10 gbg-white w-10/12 mt-10 h-full flex flex-col md:flex-row rounded-xl shadow-lg">
        <div className="image h-full w-full md:w-4/12 md:h-full">
          <img
            className="rounded-xl w-full h-full object-cover"
            src={image}
            alt="recipe image"
          />
          <div className="p-10 w-full items-center mt-10 flex flex-col md:flex-row justify-evenly dish-details h-full">
            <p className="mb-2 border-gray-200 border-b text-sm ">
              {caloriesPerServing} cals
            </p>
            <p className="mb-2 border-gray-200 border-b text-sm">
              {prepTimeMinutes} mins prep time
            </p>
            <p className="mb-2 border-gray-200 border-b text-sm">
              {cookTimeMinutes} mins cook time
            </p>
          </div>
        </div>
        <div className="p-6 recipe h-full w-full md:w-8/12">
          <div className="bg-white flex flex-col h-full mt-4 w-11/12">
            <h1 className="text-center w-full flex justify-center items-center h-24 text-4xl font-bold border-b border-gray-400">
              {name}
            </h1>
            <h2 className="w-full flex justify-center items-center h-16 text-2xl font-bold ">
              {cuisine}
            </h2>
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