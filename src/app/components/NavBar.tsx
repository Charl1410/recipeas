import React from 'react'
import SearchBar from './SearchBar';
import Link from "next/link";


const NavBar = () => {
  return (
    <div>
      <nav className="sm:flex-row flex-col border-b border-blue-500 flex justify-evenly items-center">
        <p className="text-xl font-bold">R E C I P E A S</p>
        <ul className="flex-end flex sm:flex-row flex-col items-center justify-evenly w-8/12 md:w-full">
          <Link href="/">
            <li>Homepage</li>
          </Link>
          <Link href="/recipes">
            <li>Recipes</li>
          </Link>
          <Link href="">
            <li>Discover</li>
          </Link>
          <Link href="">
            <li>My favourites</li>
          </Link>
        </ul>
        <SearchBar />
      </nav>
    </div>
  );
}

export default NavBar