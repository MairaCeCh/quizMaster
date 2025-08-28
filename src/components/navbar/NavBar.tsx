
'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const DiceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-black"
  >
    <path d="M21 3H3v18h18V3zm-2 2v14H5V5h14zM8 8a1 1 0 110 2 1 1 0 010-2zm8 0a1 1 0 110 2 1 1 0 010-2zm-4 4a1 1 0 110 2 1 1 0 010-2z" />
  </svg>
);

const NavBar = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  return (
    <div>
      <h1 className="flex justify-center items-center text-3xl font-bold h-[200px]">
        <Link href="/">Masterquiz!</Link>
      </h1>

      <aside className="w-30 h-screen nav shadow-lg p-4 fixed left-0 top-0">
        <ul className="space-y-2">
          {type === 'board' && (
            <li className="flex items-center gap-2 text-black">
              <DiceIcon />
             
            </li>
          )}
          <li>
            <a href="#" className="text-black ">Salir</a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default NavBar;
