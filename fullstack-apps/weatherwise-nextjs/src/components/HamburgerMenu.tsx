'use client';

import { useState } from 'react';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className='flex flex-col justify-center items-center w-10 h-10 space-y-1.5'>
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
  );
}
