'use client'
import SearchBar from './SearchBar';
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [isClicked, setIsCliked] = useState(false);

  const handleClick = () => {
    setIsCliked(!isClicked);
    console.log(isClicked);

  }

  return (
    <div className="top-0 bg-white">
      <nav className="h-full hidden md:flex text-black bg-opacity-10 w-full z-10 shadow-md sm:flex-row flex-col justify-evenly items-center ">
        <Link href="/">
          <img src="/images/logo.png" className="text-xl w-32 h-14"></img>
        </Link>
        <ul className="flex-end flex sm:flex-row flex-col items-center justify-evenly w-8/12 md:w-full">
          <Link href="/recipes">
            <li>Recipes</li>
          </Link>
          <Link href="/discover">
            <li>Discover All Recipes</li>
          </Link>
          <Link href="/favourites">
            <li>My favourites</li>
          </Link>
          <Link href="/contact">
            <li>Contact Me</li>
          </Link>
        </ul>
        <SearchBar />
        <button
          type="button"
          className=" m-2 w-24 h-10 text-xs text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          Log in
        </button>

        <MdAccountCircle style={{ color: "#cfcfcf", fontSize: "50px" }} />
      </nav>

      <div className="relative hamburgerMenu flex flex-col justify-between items-center md:hidden border-b border-slate-200 w-full bg-white h-full ">
        <nav className="border-b border-slate-200 w-full flex items-center justify-between h-14 bg-white">
          <h1 className="ml-6">R E C I P E A S</h1>
          <div className="mr-6">
            {isClicked ? (
              <RxCross1
                onClick={handleClick}
                className="cursor-pointer "
                style={{ color: "black", fontSize: "30px" }}
              />
            ) : (
              <RxHamburgerMenu
                onClick={handleClick}
                className="cursor-pointer "
                style={{ color: "black", fontSize: "30px" }}
              />
            )}
          </div>
        </nav>
        <ul
          className={`${
            isClicked ? "flex flex-col" : "hidden"
          } w-full bg-white`}
        >
          <Link href="/recipes">
            <li className="cursor-pointer p-1 hover:bg-slate-100 border-b border-slate-200">
              Recipes
            </li>
          </Link>
          <Link href="/discover">
            <li className="cursor-pointer p-1 hover:bg-slate-100 border-b border-slate-200">
              Discover
            </li>
          </Link>
          <Link href="/favourites">
            <li className="cursor-pointer p-1 hover:bg-slate-100 border-b border-slate-200">
              My Favourites
            </li>
          </Link>
          <li className="cursor-pointer p-1 hover:bg-slate-100 border-b border-slate-200">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar