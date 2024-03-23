import React from "react";
import DiscoverBanner from "../components/Banners/DiscoverBanner";
import DropDown from "../components/Filters/DropDown";

const DiscoverPage = () => {
  return <div className="border-2 border-black">
    <DiscoverBanner />
    <DropDown />
  </div>;
};

export default DiscoverPage;
