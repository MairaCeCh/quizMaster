'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathname = usePathname();
  const [menuHeight, setMenuHeight] = useState('h-0');

  useEffect(() => {
    // Al montarse el componente, actualiza el estado para cambiar la altura
    setMenuHeight('h-[400px]');
  }, []);

  return (
    <div 
      className={`
        flex justify-center items-center gap-12 
        overflow-hidden
        transition-all duration-1000 ease-in-out
        ${menuHeight}
      `}
    >
      <Link
        href="/info?type=single"
        className="flex items-center gap-2  bg-rose-600/20   text-black px-8 py-2 rounded-lg shadow-lg"
      >
        Un jugador
      </Link>
      <Link
        href="/info?type=board"
        className="flex items-center gap-2  bg-rose-600/20   text-black px-8 py-2 rounded-lg shadow-lg"
      >
        Juego de mesa
      </Link>
    </div>
  );
};

export default Menu;