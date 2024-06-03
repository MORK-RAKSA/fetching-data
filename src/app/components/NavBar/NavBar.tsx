"use client"
import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
  // State to manage active navigation item
  const [activeItem, setActiveItem] = useState('home');

  return (
    <nav className="bg-black shadow-lg shadow-blue-950 p-2 z-10 top-0 sticky">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0">
          {/* <img
            className="h-8 w-8"
            src="/img/logo.svg"
            alt="Workflow"
          /> */}
        </div>
        <div className=" sm:block sm:ml-6">
          <div className="flex space-x-4">
            <Link legacyBehavior href="/">
              <a 
                className={`text-gray-300 px-6 py-5 rounded-2xl transition duration-500 ease-in-out text-3xl ${activeItem === 'home' ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}`}
                onClick={() => setActiveItem('home')}
              >
                Home
              </a>
            </Link>
            <Link legacyBehavior href="/FavoriteList">
              <a 
                className={`text-gray-300 px-6 py-5 rounded-2xl transition duration-500 ease-in-out text-3xl ${activeItem === 'favorite' ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}`}
                onClick={() => setActiveItem('favorite')}
              >
                Favorite
              </a>
            </Link>
            <Link legacyBehavior href="/about">
              <a 
                className={`text-gray-300 px-6 py-5 rounded-2xl transition duration-500 ease-in-out text-3xl ${activeItem === 'about' ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}`}
                onClick={() => setActiveItem('about')}
              >
                About
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
