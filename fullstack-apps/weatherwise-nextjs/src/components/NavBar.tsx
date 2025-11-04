'use client';

import { useState } from 'react';
import Logo from './Logo';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=''>
      <div className='flex justify-between  p-3 rounded-sm items-center md:h-20 shadow-xl/50 bg-[#F0F8FF]'>
        <Logo />

        {/* DESKTOP MENU */}
        <ul className='hidden md:flex space-x-6'>
          <li className='bg-[#BFD7FF] rounded-sm px-2 cursor-pointer'>
            <a>Home</a>
          </li>
          <li className='bg-[#BFD7FF] rounded-sm px-2 cursor-pointer'>
            <a>Blog</a>
          </li>
          <li className='bg-[#BFD7FF] rounded-sm px-2 cursor-pointer'>
            <a>Services</a>
          </li>
          <li className='bg-[#BFD7FF] rounded-sm px-2 cursor-pointer'>
            <a>Contact</a>
          </li>
          <li className='bg-[#BFD7FF] rounded-sm px-2 cursor-pointer'>
            <a>About</a>
          </li>
          <li className='bg-amber-300 rounded-sm px-2 font-bold cursor-pointer'>
            <a>Log out</a>
          </li>
        </ul>
        {/* HAMBURGER BUTTON FOR MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5'>
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>
      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className='md:hidden absolute right-0 mt-2 w-25 bg-white shadow-lg rounded-lg p-2 space-y-2 mr-3.5'>
          {/* <ul className='md:hidden bg-white shadow-md space-y-2 px-4 py-3'></ul> */}
          <li className='bg-[#BFD7FF] rounded-sm text-center cursor-pointer'>
            <a>Home</a>
          </li>
          <li className='bg-[#BFD7FF] rounded-sm text-center px-1 cursor-pointer'>
            <a>Blog</a>
          </li>
          <li className='bg-[#BFD7FF] rounded-sm text-center px-1 cursor-pointer'>
            <a>Services</a>
          </li>
          <li className='bg-[#BFD7FF] rounded-sm text-center px-1 cursor-pointer'>
            <a>Contact</a>
          </li>
          <li className='bg-[#BFD7FF] rounded-sm text-center px-1 cursor-pointer'>
            <a>About</a>
          </li>
          <li className='bg-[#EAA221] rounded-sm text-center px-1 font-bold cursor-pointer'>
            <a>Log out</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;

// className = 'max-w-6xl mx-auto px-4 flex justify-between items-center h-16';
