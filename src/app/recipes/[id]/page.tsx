import React from "react";
import axios from "axios";
import SingleRecipeCard from "../../components/Cards/SingleRecipeCard";
import { SingleRecipeProps } from "../../types";

//Generate static parameters axios request to get data for dynamic route
export async function generateStaticParams() {
       const response = await axios.get("https://dummyjson.com/recipes");
       return response.data.recipes.map((recipe: any) => ({
        id: recipe.id.toString(),
       }));
       
}

async function getRecipe(id: any) {
     const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
     return response.data;

}

// Define the SingleRecipe page and passing in params to access the post id 
const SingleRecipe: React.FC<SingleRecipeProps> = async ({ params }) => {
    const recipe = await getRecipe(params.id);
    console.log({recipe})
  return (
    <>
      <div>
        <SingleRecipeCard
          name={recipe.name}
          cuisine={recipe.cuisine}
          prepTimeMinutes={recipe.prepTimeMinutes}
          cookTimeMinutes={recipe.cookTimeMinutes}
          caloriesPerServing={recipe.caloriesPerServing}
          instructions={recipe.instructions}
          ingredients={recipe.ingredients}
          image={recipe.image}
          rating={recipe.rating}
        />
      </div>
    </>
  );
    
   
};

export default SingleRecipe;
