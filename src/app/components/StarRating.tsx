import React from 'react'
import { IoIosStarOutline } from "react-icons/io";

const StarRating = () => {
  return (
    <div className="flex flex-row">
      <IoIosStarOutline style={{ color: "#fff01c" }} />
      <IoIosStarOutline style={{ color: "#fff01c" }} />
      <IoIosStarOutline style={{ color: "#fff01c" }} />
      <IoIosStarOutline style={{ color: "#fff01c" }} />
      <IoIosStarOutline style={{ color: "#fff01c" }} />
    </div>
  );
}

export default StarRating