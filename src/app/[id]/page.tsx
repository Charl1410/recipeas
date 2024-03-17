import React from "react";
import axios from "axios";
import { SingleRecipeProps } from "../types";

//Generate static parameters axios request to get data for dynamic route
export async function generateStaticParams() {
     
        //making api call 
       const response = await axios.get("https://dummyjson.com/recipes");
       return response.data.recipes.map((recipe: any) => ({
        id: recipe.id.toString(),
       }));
}

//this function will take in the id requested 
async function getRecipe(id: any) {
     const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
     return response.data;

}

// Define the SingleRecipe component
const SingleRecipe: React.FC<SingleRecipeProps> = async ({ params }) => {
  console.log(params);
    const recipe = await getRecipe(params.id);
    console.log({recipe})
  return (

  );
    
   
};

export default SingleRecipe;
