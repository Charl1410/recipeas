import React from "react";
import Image from "next/image";
import DishTypeBanner from "../DishTypeBanner";

const Banner = () => {
  return (
    <div className="shadow-md relative h-96 bannerContainer w-full overflow-hidden">
      <Image
        className="object-cover"
        src="/images/banner.jpeg"
        alt="banner"
        width={2000}
        height={300}
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold">
        R E C I P E A S
      </h1>
      <p className="absolute mt-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl">
        All your favourite dishes all in one place!
      </p>
    </div>
  );
};

export default Banner;
