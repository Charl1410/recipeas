'use client'
import React from 'react'
import { useRef } from "react";
import { Carousel } from "@mantine/carousel";


const DiscoverBanner = () => {

  return (
    <div className="">
      <Carousel
        withIndicators
        height={400}>
        <Carousel.Slide>
          <div className="relative h-96 overflow-hidden shadow-md">
            <img
              src="/images/discoverBanner.jpg"
              alt="image"
              className="object-cover h-full w-full"
            />
            <h1 className="ml-4 text-3xl font-bold z-10 inset-y-1/3	 absolute text-white">
              Discover your cooking potential
            </h1>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
      </Carousel>
    </div>
  );
}

export default DiscoverBanner


