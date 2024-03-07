import React from 'react'

const NavBar = () => {
  return (
 <div>
  <nav className="flex items-center border-2 border-black">
    <p className="text-xl font-bold pr-4">R E C I P E A S</p>
    <ul className="border-2 border-blue-500 flex-end flex flex-row justify-evenly w-8/12">
      <li>Homepage</li>
      <li>Recipes</li>
      <li>Discover</li>
      <li>My favourites</li>
    </ul>
  </nav>
</div>
  );
}

export default NavBar