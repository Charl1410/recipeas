import React from "react";
import Image from "next/image";
import DishTypeBanner from "../DishTypeBanner";
import BannerButton from "../Buttons/BannerButton";

const Banner = () => {
  return (
    <div className="shadow-md relative h-96 md:h-[700px] bannerContainer w-full overflow-hidden">
      <Image
        className="object-cover"
        src="/images/banner.jpeg"
        alt="banner"
        fill
        sizes="100vw"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold">
        R E C I P E A S
      </div>
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <p className="absolute mt-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl">
        All your favourite dishes all in one place!
      </p>
      <BannerButton />
    </div>
  );
};

export default Banner;
