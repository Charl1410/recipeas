import React from 'react'
import { IoMdSearch } from "react-icons/io";


const SearchBar = () => {
  return (
    <div
      className="relative flex border-2 border-gray-300 rounded-xl"
      data-twe-input-wrapper-init
      data-twe-input-group-ref
    >
      <input
        type="search"
        className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        placeholder="Search"
        aria-label="Search"
        id="search-input"
        aria-describedby="search-button"
      />
      <label
        htmlFor="search-input" // Corrected from "for" to "htmlFor"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
      >
        Search
      </label>
      <button className="flex items-center justify-center w-16 rounded-full bg-blue-500">
        <IoMdSearch style={{ color:"white", fontSize: "30px" }} />
      </button>
    </div>
  );
}

export default SearchBar