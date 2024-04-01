'use client'
import React from 'react'
import { useRef } from "react";
import { Carousel } from "@mantine/carousel";


const DiscoverBanner = () => {

  return (
    <div className="">
      <Carousel height={400}>
        <Carousel.Slide>
          <div className="relative h-96 overflow-hidden shadow-md">
            <img
              src="/images/discoverBanner.jpg"
              alt="image"
              className="object-cover h-full w-full"
            />
            <div className="ml-4 z-10 inset-y-1/3 absolute text-white">
              <h1 className="text-3xl font-bold">
                Discover your cooking potential
              </h1>
              <p className="">
                Recipes for all levels, all cuisines, all ingredients{" "}
              </p>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="relative h-96 overflow-hidden shadow-md">
            <img
              src="/images/snacks.jpeg"
              alt="image"
              className="object-cover h-full w-full"
            />
            <div className="ml-4 z-10 inset-y-1/3 absolute text-white">
              <h1 className="text-3xl font-bold">
                Discover your cooking potential
              </h1>
              <p className="">
                Recipes for all levels, all cuisines, all ingredients{" "}
              </p>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="relative h-96 overflow-hidden shadow-md">
            <img
              src="/images/pizza.jpeg"
              alt="image"
              className="object-cover h-full w-full"
            />
            <div className="ml-4 z-10 inset-y-1/3 absolute text-white">
              <h1 className="text-3xl font-bold">
                Discover your cooking potential
              </h1>
              <p className="">
                Recipes for all levels, all cuisines, all ingredients{" "}
              </p>
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}

export default DiscoverBanner


