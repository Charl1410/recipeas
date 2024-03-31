'use client'
import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react';

const FilterNav = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

  return (
    <div
      className={`absolute bg-white border-2 w-60 flex flex-col items-center`}
    >
      <h1 className="text-lg ">Filter By</h1>
      <div className="flex justify-center items-center w-full h-14 border-2">
        <p>Calories</p>
        <RiArrowDropDownLine size={30} />
      </div>
      <div className="flex justify-center items-center w-full h-14 border-2">
        <p>Prep time</p>
        <RiArrowDropDownLine size={30} />
      </div>
    </div>
  );
}

export default FilterNav