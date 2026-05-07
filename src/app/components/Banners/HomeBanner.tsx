import React from "react";
import Image from "next/image";
import DishTypeBanner from "../DishTypeBanner";
import BannerButton from "../Buttons/BannerButton";

const Banner = () => {
  return (
    <div className="shadow-md relative h-100 md:h-[700px] bannerContainer w-full overflow-hidden">
      <Image
        className="object-cover"
        src="/images/banner.jpeg"
        alt="banner"
        fill
        sizes="100vw"
      />
      <div className="absolute inset-0 z-10 bg-black/50" aria-hidden />
      <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform text-3xl font-bold text-white md:text-5xl">
        R E C I P E A S
      </div>
      <p className="absolute top-1/2 left-1/2 z-20 mt-12 -translate-x-1/2 -translate-y-1/2 transform text-center text-xl text-white">
        All your favourite dishes all in one place!
      </p>
      <div className="relative z-20">
        <BannerButton />
      </div>
    </div>
  );
};

export default Banner;
