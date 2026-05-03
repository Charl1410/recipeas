import React from 'react'
import { SingleRecipeCardProps } from '../../types';
import Link from 'next/link';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoFastFoodOutline, IoTimerOutline } from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa";

const SingleRecipeCard: React.FC<SingleRecipeCardProps> = ({
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
      <div className=" mb-10 gbg-white w-full h-full flex flex-col md:flex-col items-center justify-center">
        <div className="image w-full max-h-[500px] overflow-hidden">
          <img
            className="w-full h-full max-h-[500px] object-cover"
            src={image}
            alt="recipe image"
          />
          <div className="">{rating}</div>
        </div>
        <div className="p-6 recipe h-full w-full md:w-4/5 bg-white mt-[-100px] rounded-xl shadow-lg">
          <div className="bg-white flex flex-col h-full mt-4 w-full">
            <h1 className="text-center w-full flex justify-center items-center text-4xl font-bold border-b border-gray-400">
              {name}
            </h1>
          </div>
          <div className="p-10 w-full items-center flex flex-row gap-4 dish-details h-full">
            <div className="flex flex-row justify-center items-center mb-2 w-fit py-2 px-4 border-gray-200 bg-slate-50 rounded-full border-b text-sm gap-1">
              <IoFastFoodOutline />
              {caloriesPerServing} cals
            </div>
            <div className="flex flex-row justify-center items-center mb-2 w-fit py-2 px-4 border-gray-200 bg-slate-50 rounded-full border-b text-sm gap-1">
              <IoTimerOutline />
              {prepTimeMinutes} mins prep time
            </div>
            <div className="flex flex-row justify-center items-center mb-2 w-fit py-2 px-4 border-gray-200 bg-slate-50 rounded-full border-b text-sm gap-1">
              <IoTimerOutline />
              {cookTimeMinutes} mins cook time
            </div>
            <div className="flex flex-row justify-center items-center mb-2 w-fit py-2 px-4 border-gray-200 bg-slate-50 rounded-full border-b text-sm gap-1">
              <FaRegFlag />

              {cuisine}
            </div>
          </div>
          <div className="">
            <h1 className="mt-4 font-bold text-lg border-b border-gray-200">
              Ingredients
            </h1>
            <ul className="">
              {ingredients.map((ingredient, index) => (
                <li key={index} className=" mt-2">
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