import { Carousel } from "@mantine/carousel";
import LowCalCard from "../Cards/LowCalCard";
import { useEffect, useState } from "react";
import { getRecipes } from '../../api/getRecipes'; //importing the API func


function RecipeCarousel() {
  //store data here
  const[lowCalData, setLowCalData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    //function to fetch data
    const fetchData = async () => {
      const recipes = await getRecipes(); // Call the API function
      //filtering data set to retrieve low calorie recipes 
      const lowCalRecipes = recipes.filter(
        (recipe: any) => recipe.caloriesPerServing < 300);
      setLowCalData(lowCalRecipes);
      setLoading(false); // Set loading to false when data fetching is complete;
    };
     fetchData();
  }, []);


useEffect(() => {
  console.log("low cal data", lowCalData);
}, [lowCalData]);


  if (loading) {
    return <div>Loading...</div>
  }

  //this will run first 
  return (
    <div className="w-full">
      <Carousel
        withIndicators
        height={400}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="start"
      >
        {lowCalData &&
          lowCalData.map((recipe: any, index: number) => (
            <Carousel.Slide>
              <LowCalCard key={index} data={recipe} />
            </Carousel.Slide>
          ))}
      </Carousel>
    </div>
  );
}

export default RecipeCarousel