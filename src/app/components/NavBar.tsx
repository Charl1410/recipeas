import React from 'react'
import SearchBar from './SearchBar';
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";



const NavBar = () => {
  return (
    <div>
      <nav className=" text-white text-xl bg-white bg-opacity-10 font-bold w-full fixed z-10 shadow-md sm:flex-row flex-col flex justify-evenly items-center ">
        <Link href="/">
          <h1 className="text-xl font-bold">R E C I P E A S</h1>
        </Link>
        <ul className="flex-end flex sm:flex-row flex-col items-center justify-evenly w-8/12 md:w-full">
          <Link href="/">
            <li>Homepage</li>
          </Link>
          <Link href="/recipes">
            <li>Recipes</li>
          </Link>
          <Link href="/discover">
            <li>Discover</li>
          </Link>
          <Link href="/favourites">
            <li>My favourites</li>
          </Link>
          <Link href="/favourites">
            <li>My favourites</li>
          </Link>
        </ul>
        <SearchBar />
        <MdAccountCircle style={{ color: "white", fontSize: "50px" }} />
      </nav>
    </div>
  );
}

export default NavBar