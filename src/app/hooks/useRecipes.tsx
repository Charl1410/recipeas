import { useEffect, useState } from "react";
import { getRecipes } from "../api/getRecipes";

export function useRecipes(limit = 10) {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        if (!data) throw new Error("No recipes returned");
        setRecipes(data.slice(0, limit));
      } catch (err) {
        setError("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [limit]); //
  
  return { recipes, loading, error };
}