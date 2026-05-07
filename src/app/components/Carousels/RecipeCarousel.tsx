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
      const lowCalRecipes = recipes.filter( //filtering data set to retrieve low calorie recipes 
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
        height={500}
        slideSize={{ base: "100%", sm: "50%", md: "20%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="start"
        classNames={{
          indicators: "mt-4 flex flex-wrap justify-center gap-2",
          indicator:
            "h-2.5 w-2.5 rounded-full !bg-gray-400 transition-colors hover:!bg-gray-500 data-[active]:!bg-neutral-900 data-[active]:w-6",
        }}
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