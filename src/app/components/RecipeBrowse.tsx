"use client";
import React from "react";
import RecipeCard from "./Cards/RecipeCard";
import { useRecipes } from "../hooks/useRecipes";
type RecipeBrowseProps = {
  limit?: number;
};
const RecipeBrowse: React.FC<RecipeBrowseProps> = ({ limit = 3 }) => {
  const { recipes, loading, error } = useRecipes(limit);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="mt-10 border-t border-slate-200 flex flex-col items-center justify-center p-12">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl">Latest Recipes</h1>
        <p className="text-xl text-grey mb-2">Browse our collection of recipes. We have a wide range of recipes to choose from.</p>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center flex-col md:flex-row">
        {recipes.map((recipe: any, index: number) => (
          <RecipeCard key={index} data={recipe} />
        ))}
      </div>
    </div>
  );
};
export default RecipeBrowse;