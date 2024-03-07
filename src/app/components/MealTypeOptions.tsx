import React from 'react'

const MealTypeOptions = () => {
  return (
    <div className="p-2 h-full border-2 border-black flex flex-row flex-wrap justify-center items-center bg-slate-100">
      <div className=" hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out relative h-96 w-3/12 mr-6">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="/images/breakfast.jpeg"
          alt="breakfast"
        />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          Breakfast
        </h2>
      </div>
      <div className="hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out relative h-96 w-5/12 ">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="/images/lunch.jpeg"
          alt="breakfast"
        />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          Lunch
        </h2>
      </div>
      <div className="hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out relative h-96 w-5/12 mr-6">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="/images/dinner.jpeg"
          alt="breakfast"
        />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          Dinner
        </h2>
      </div>
      <div className="hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out relative h-96 w-3/12 ">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="/images/snacks.jpeg"
          alt="breakfast"
        />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          Snacks
        </h2>
      </div>
    </div>
  );
}

export default MealTypeOptions