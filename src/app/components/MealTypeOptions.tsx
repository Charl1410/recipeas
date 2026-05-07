import React from 'react'
import Link from 'next/link'



const MealTypeOptions = () => {
  return (
    <div className="p-10 md:p-12 flex md:flex-row flex-wrap justify-center items-center bg-slate-100 flex-col">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl">Meal Type</h1>
          <h2 className="text-xl text-grey">Choose a meal type to get started. We have a wide range of meal types to choose from.</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <Link className="m-2" href="/recipes/meal-type/breakfast">
        <div className="hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out relative h-36 md:h-96 w-full hover:cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/images/breakfast.jpeg"
            alt="breakfast"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black/20 rounded-xl">
            Breakfast
          </h2>
        </div>
        </Link>
        <Link className="m-2" href="/recipes/meal-type/lunch">
        <div className="hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out relative h-36 md:h-96 w-full hover:cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/images/lunch.jpeg"
            alt="breakfast"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black/20 rounded-xl">
            Lunch
          </h2>
        </div>
        </Link>
        <Link className="m-2" href="/recipes/meal-type/dinner">
        <div className="hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out relative h-36 md:h-96 w-full  mr-6 hover:cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/images/dinner.jpeg"
            alt="breakfast"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black/20 rounded-xl">
            Dinner
          </h2>
        </div>
        </Link>
        <Link className="m-2" href="/recipes/meal-type/snacks">
        <div className="hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out relative h-36 md:h-96 w-full hover:cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/images/snacks.jpeg"
            alt="breakfast"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black/20 rounded-xl ">
            Snacks
          </h2>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default MealTypeOptions