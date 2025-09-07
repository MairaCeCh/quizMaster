
'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const InfoPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const isSinglePlayer = type === 'single';

  return (
    <div className=" max-w-sm mx-auto mt-10 bg-rose-700/40   rounded-lg shadow-lg p-6 text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {isSinglePlayer ? 'Un jugador' : 'Juego de mesa'}
      </h2>
      <p className="text-black mb-6">
        {isSinglePlayer
          ? 'Este juego es de un jugador'
          : 'Este juego es para varios jugadores o grupos'}
      </p>
      <div className="flex justify-center space-x-4">
        <button className="px-4 py-2  boton boton:hover">
          <Link href="/category">Ok</Link>
        </button>
        <button className="px-4 py-2  boton boton:hover">
          <Link href="/">Volver</Link>
        </button>
      </div>
    </div>
  );
};

export default InfoPage;
