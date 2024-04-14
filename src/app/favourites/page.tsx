import React from "react"
import DiscoverBanner from "../components/Banners/DiscoverBanner";

const FavouritesPage = () => {
  return <div className="h-screen p-2 border-2 border-black flex justify-center">
    <div className="h-96 w-full border-2 border-black rounded-xl">
      <DiscoverBanner />
    </div>
  </div>;
};

export default FavouritesPage;
