import { Carousel } from "@mantine/carousel";
import LowCalCard from "../Cards/LowCalCard";
import { useEffect, useState } from "react";
import { getRecipes } from '../../api/getRecipes'; //importing the API func


function RecipeCarousel() {
  //store data here
  const [data, setData] = useState<any>(null);
  const[lowCalData, setLowCalData] = useState<any>(null);

  useEffect(() => {
    //function to fetch data
    const fetchData = async () => {
      const recipes = await getRecipes(); // Call the API function
      setData(recipes); //setting the data
      setLowCalData(data.filter((recipe: any) => recipe.caloriesPerServing < 300)
      );
    };
     fetchData();
  }, []);

  if (lowCalData === null) {
    return <div>Loading...</div>
  }
  return (
    <Carousel
      withIndicators
      height={600}
      slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
      slideGap={{ base: 0, sm: "md" }}
      loop
      align="start"
    >
      <Carousel.Slide>
        {lowCalData && 
        lowCalData.map((recipe: any, index: number) => (
          <LowCalCard key={index} data={recipe}/>
        ))}
      </Carousel.Slide>
    </Carousel>
  );
}

export default RecipeCarousel