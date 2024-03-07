"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const DishVariation = () => {
  //store data here
  const [data, setData] = useState(null);
  const apiUrl = "https://dummyjson.com/recipes";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log('hello')
        console.log("Response:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []); // Empty dependency array to mimic componentDidMount behavior


  return (
    <div className="items-center flex justify-center text-center rounded-full w-32 h-32 border-black border-2">
      <p>{data !==null ? data : 'loading...'}</p>
    </div>
  );
}

export default DishVariation