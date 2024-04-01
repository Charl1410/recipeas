import React from "react";
import DiscoverBanner from "../components/Banners/DiscoverBanner";
import DropDown from "../components/Filters/DropDown";
import RecipeBrowse from "../components/RecipeBrowse";
import PopOver from "../components/PopOver.tsx/PopOver";
import { Popover } from "@mantine/core";

const DiscoverPage = () => {
  return (
    <div className="">
      <DiscoverBanner />
      <div className="flex flex-col md:flex-row justify-evenly">
        <DropDown label={"Calories"} />
        <DropDown label={"Prep time"} />
        <DropDown label={"Cook time"} />
        <DropDown label={"Cuisine"} />
        <DropDown label={"Difficulty"} />
        <DropDown label={"Meal Type"} />
      </div>
      <RecipeBrowse />
      <Popover />
    </div>
  );
};

export default DiscoverPage;
