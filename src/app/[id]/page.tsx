import React from "react";
import axios from "axios";

//Generate static parameters axios request to get data for dynamic route
export async function generateStaticParams() {
     
        //making api call 
       const response = await axios.get("https://dummyjson.com/recipes");
       return response.data.recipes.map((recipe: any) => ({
        id: recipe.id.toString(),
       }));
}

async function getRecipe(id: any) {
     const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
     return response.data;

}
// Define the type for the params object
interface Params {
  // Define the keys and their types
  [key: string]: string;
}

// Define the props interface with the params prop
interface SingleRecipeProps {
  params: Params;
}

// Define the SingleRecipe component
const SingleRecipe: React.FC<SingleRecipeProps> = async ({ params }) => {
  console.log(params);
    const recipe = await getRecipe(params.id);
    console.log({recipe})
  return <div>Single Recipe Page</div>;
};

export default SingleRecipe;
