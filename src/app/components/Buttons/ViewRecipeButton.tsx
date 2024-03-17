"use client";

import React from "react";
import { useRouter } from "next/navigation";

//dynamic route 
//this function will take in the id of the recipe 
const ViewRecipeButton = ({id}) => {

    //this will change the route taking in the id as a prop
    const router = useRouter()
    const handleClick = () => {
        router.push(`/recipes/${id}`)
    }

  return (
    <button onClick={handleClick} className="border-1 border-pink-500 bg-slate-200 p-1 rounded-xl w-8/12">
      View full recipe
    </button>
  );
};

export default ViewRecipeButton;
