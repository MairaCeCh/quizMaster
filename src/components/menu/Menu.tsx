'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathname = usePathname();

  if (pathname !== '/') return null; 

  return (
    <div className="flex justify-center items-center gap-12 h-[400px]">
    <Link href="/info?type=single"  className="flex items-center gap-2 bg-yellow-500 text-black px-8 py-2 rounded-lg shadow-lg">Un jugador</Link>
     <Link href="/info?type=board" className="flex items-center gap-2 bg-yellow-500 text-black px-8 py-2 rounded-lg shadow-lg">Juego de mesa</Link> 
    </div>
  );
};

export default Menu;

