import React from "react";
import DiscoverBanner from "../components/Banners/DiscoverBanner";
import DropDown from "../components/Filters/DropDown";
import RecipeBrowse from "../components/RecipeBrowse";

const DiscoverPage = () => {
  return (
    <div className="">
      <DiscoverBanner />
      <div className="flex flex-row justify-evenly">
        <DropDown label={"Calories"} />
        <DropDown label={"Prep time"} />
        <DropDown label={"Cook time"} />
        <DropDown label={"Cuisine"} />
        <DropDown label={"Difficulty"} />
      </div>

      <RecipeBrowse />
    </div>
  );
};

export default DiscoverPage;
