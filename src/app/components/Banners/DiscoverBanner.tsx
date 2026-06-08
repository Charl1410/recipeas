'use client'
import React from 'react'
import { Carousel } from "@mantine/carousel";
import Image from 'next/image';

const DiscoverBanner = () => {
  return (
    <div className="">
      <Carousel height={400}>
        <Carousel.Slide>
          <div className="relative h-96 overflow-hidden shadow-md">
            <Image
              src="/images/discoverBanner.jpg"
              alt="Discover your cooking potential"
              fill
              className="object-cover"
              sizes="100vw"
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
            <Image
              src="/images/snacks.jpeg"
              alt="Snacks recipes"
              fill
              className="object-cover"
              sizes="100vw"
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
            <Image
              src="/images/pizza.jpeg"
              alt="Pizza recipes"
              fill
              className="object-cover"
              sizes="100vw"
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
