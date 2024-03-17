import React from 'react'
import { RecipeData } from '../types';

const SingleRecipe: React.FC<RecipeData> = ({
  name,
  cuisine,
  prepTimeMinutes,
  cookTimeMinutes,
  caloriesPerServing
}) => {
  return (
    <div className="bg-slate-100 h-full flex-col flex items-center justify-center">
      <div className="bg-white w-10/12 mt-10 h-full flex flex-col md:flex-row rounded-xl">
        <div className="image h-full w-full md:w-4/12 md:h-screen">
          <img
            className="rounded-xl w-full h-full object-cover"
            src="/images/japanese.jpeg"
            alt=""
          />
        </div>
        <div className="p-6 recipe h-full w-8/12">
          <div className="bg-white flex flex-col h-full mt-4 w-11/12">
            <h1 className="w-full flex justify-center items-center h-16 text-4xl font-bold border-b border-gray-400">
              {name}
            </h1>
            <h2 className="w-full flex justify-center items-center h-16 text-2xl font-bold ">
              {cuisine}
            </h2>
          </div>
          <div className="w-full bg-slate-50 items-center mt-10 flex flex-row justify-evenly dish-details h-24">
            <p className="border-gray-200 border-b text-lg font-bold">
              {caloriesPerServing} cals
            </p>

            <p className="border-gray-200 border-b text-lg font-bold">
              {prepTimeMinutes} mins prep time
            </p>
            <p className="border-gray-200 border-b text-lg font-bold">
              {cookTimeMinutes} mins cook time
            </p>
            <p className="border-gray-200 border-b text-lg font-bold">Vegan</p>
          </div>
          <h1 className="mt-4 font-bold text-lg border-b border-gray-200">
            Ingredients
          </h1>
          <ul className="">
            <li className="mt-2">Pizza dough</li>
            <li className="mt-2">Fresh mozzarella cheese</li>
            <li className="mt-2">Fresh basil leaves</li>
            <li className="mt-2">Olive oil</li>
            <li className="mt-2">Tomato sauce</li>
            <li className="mt-2">Salt & pepper to taste</li>
          </ul>
          <div className="mt-4 instructions">
            <h1 className="font-bold text-lg border-b border-gray-200">
              Method
            </h1>
            <ul className="">
              <li className="mt-2">Preheat the oven to 475°F (245°C).</li>
              <li className="mt-2">
                Roll out the pizza dough and spread tomato sauce evenly
              </li>
              <li className="mt-2">
                Top with slices of fresh mozzarella and fresh basil leaves
              </li>
              <li className="mt-2">
                Drizzle with olive oil and season with salt and pepper
              </li>
              <li className="mt-2">
                Bake in the preheated oven for 12-15 minutes or until the crust
                is golden brown
              </li>
              <li className="mt-2"> Slice and serve hot</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe