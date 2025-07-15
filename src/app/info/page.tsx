// import React from 'react'
// import Link from 'next/link'

// const page = () => {
//   return (
//     <div>
//       <div className="max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-lg p-6 text-center">
//   <h2 className="text-xl font-bold text-gray-800 mb-2">Un jugador</h2>
//   <p className="text-gray-600 mb-6">Este juego es de un jugador</p>
//   <div className="flex justify-center space-x-4">
//     <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"><Link href="/category">Ok</Link></button>
//     <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"> <Link href="/">Volver</Link> </button>
//   </div>
// </div>

// </div>


  
// )}

// export default page

'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const InfoPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const isSinglePlayer = type === 'single';

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-lg p-6 text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {isSinglePlayer ? 'Un jugador' : 'Juego de mesa'}
      </h2>
      <p className="text-gray-600 mb-6">
        {isSinglePlayer
          ? 'Este juego es de un jugador'
          : 'Este juego es para varios jugadores o grupos'}
      </p>
      <div className="flex justify-center space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          <Link href="/category">Ok</Link>
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition">
          <Link href="/">Volver</Link>
        </button>
      </div>
    </div>
  );
};

export default InfoPage;
