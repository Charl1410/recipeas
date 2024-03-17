import React from "react";
import Image from "next/image";
import DishTypeBanner from "./DishTypeBanner";

const Banner = () => {
  return (
    <div className="h-96 bannerContainer w-full border-2 border-black overflow-hidden">
      <Image
        className="object-cover"
        src="/images/banner.jpeg"
        alt="banner"
        width={2000}
        height={300}
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold">
        R E C I P E A S
      </h1>
      <p className="absolute mt-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl">
        All your favourite dishes all in one place!
      </p>
      <DishTypeBanner />
    </div>
  );
};

export default Banner;
