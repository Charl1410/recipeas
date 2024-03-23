'use client'
import { Carousel } from "@mantine/carousel";
import RecipeCard from "../Cards/RecipeCard";

function RecipeCarousel() {
  return (
    <Carousel slideSize="70%" withIndicators height={200} loop slideGap="sm">
      <Carousel.Slide>
        <div className="h-96 w-96 border-2 border-black"></div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="h-96 w-40 border-2 border-black"></div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="h-96 w-40 border-2 border-black"></div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="h-96 w-40 border-2 border-black"></div>
      </Carousel.Slide>
    </Carousel>
  );
}


export default RecipeCarousel 