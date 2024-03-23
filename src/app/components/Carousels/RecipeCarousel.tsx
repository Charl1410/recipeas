import { Carousel } from "@mantine/carousel";
import LowCalCard from "../Cards/LowCalCard";

function RecipeCarousel() {
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
        <LowCalCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <LowCalCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <LowCalCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <LowCalCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <LowCalCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <LowCalCard />
      </Carousel.Slide>

      {/* ...other slides */}
    </Carousel>
  );
}

export default RecipeCarousel