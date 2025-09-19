
// 'use client';
// import React, { useState, useEffect, use } from 'react';
// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
// import { Press_Start_2P } from "next/font/google";

// const pixelFont = Press_Start_2P({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-pixel",
// });
// const loading = useSignal(true);
// const InfoPage = () => {
//   const searchParams = useSearchParams();
//   const type = searchParams.get('type');
//   const isSinglePlayer = type === 'single';

//   const [cardVisibility, setCardVisibility] = useState('opacity-0 scale-95');

//   useEffect(() => {
//     setCardVisibility('opacity-100 scale-100');
//   }, []);

//   return (
//     <div
//     {loading.value = true ? (

      
//       )}
//       className={`
//         max-w-sm mx-auto mt-20
//         bg-rose-600/20
//         backdrop-blur-md
//         rounded-2xl shadow-xl
//         p-8 text-center
//         text-white
//         transition-all duration-700 ease-out
//         ${cardVisibility}
//       `}
//     >
//       <h2 className={`text-2xl font-bold mb-4 ${pixelFont.variable} font-pixel`}>
//         {isSinglePlayer ? 'Un jugador' : 'Juego de mesa'}
//       </h2>
//       <p className="text-white text-lg mb-8">
//         {isSinglePlayer
//           ? 'Este juego es de un jugador'
//           : 'Para comenzar a jugar, debes presionar el ícono del dado (🎲) que se encuentra en la barra de navegación.'}
//       </p>
//       <div className="flex justify-center space-x-6">
//         <Link
//           href={isSinglePlayer ? "/category" : "/"} // Change the 'Ok' button behavior
//           className="
//             inline-flex items-center justify-center
//             bg-zinc-700/30 hover:bg-zinc-600/50
//             backdrop-blur-sm
//             px-6 py-3 rounded-lg
//             text-white hover:text-gray-100
//             shadow-md hover:shadow-lg
//             transform hover:translate-y-0.5
//             transition-all duration-200
//             font-semibold
//           "
//         >
//           Ok
//         </Link>
//         <Link
//           href="/"
//           className="
//             inline-flex items-center justify-center
//             bg-zinc-700/30 hover:bg-zinc-600/50
//             backdrop-blur-sm
//             px-6 py-3 rounded-lg
//             text-white hover:text-gray-100
//             shadow-md hover:shadow-lg
//             transform hover:translate-y-0.5
//             transition-all duration-200
//             font-semibold
//           "
//         >
//           Volver
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default InfoPage;
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

const InfoPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const isSinglePlayer = type === 'single';
  const [loading, setLoading] = useState(true);
  const [cardVisibility, setCardVisibility] = useState('opacity-0 scale-95');

  // Simula la carga de datos
  useEffect(() => {
    // Aquí podrías hacer una llamada a una API real
    setTimeout(() => {
      setLoading(false);
      setCardVisibility('opacity-100 scale-100');
    }, 2000); // 2 segundos de simulación de carga
  }, []);

  // Esqueleto para el estado de carga
  const Skeleton = () => (
    <div
      className={`
        max-w-sm mx-auto mt-20
        bg-zinc-700/20
        backdrop-blur-md
        rounded-2xl shadow-xl
        p-8 text-center
        text-white
        animate-pulse
      `}
    >
      <div className="h-8 bg-zinc-600 rounded w-3/4 mx-auto mb-4"></div>
      <div className="h-6 bg-zinc-600 rounded mb-4 w-5/6 mx-auto"></div>
      <div className="h-6 bg-zinc-600 rounded mb-8 w-1/2 mx-auto"></div>
      <div className="flex justify-center space-x-6">
        <div className="h-12 w-24 bg-zinc-600 rounded-lg"></div>
        <div className="h-12 w-24 bg-zinc-600 rounded-lg"></div>
      </div>
    </div>
  );

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div
          className={`
            max-w-sm mx-auto mt-20
            bg-rose-600/20
            backdrop-blur-md
            rounded-2xl shadow-xl
            p-8 text-center
            text-white
            transition-all duration-700 ease-out
            ${cardVisibility}
          `}
        >
          <h2 className={`text-2xl font-bold mb-4 ${pixelFont.variable} font-pixel`}>
            {isSinglePlayer ? 'Un jugador' : 'Juego de mesa'}
          </h2>
          <p className="text-white text-lg mb-8">
            {isSinglePlayer
              ? 'Este juego es de un jugador'
              : 'Para comenzar a jugar, debes presionar el ícono del dado (🎲) que se encuentra en la barra de navegación.'}
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              href={isSinglePlayer ? "/category" : "/"}
              className="
                inline-flex items-center justify-center
                bg-zinc-700/30 hover:bg-zinc-600/50
                backdrop-blur-sm
                px-6 py-3 rounded-lg
                text-white hover:text-gray-100
                shadow-md hover:shadow-lg
                transform hover:translate-y-0.5
                transition-all duration-200
                font-semibold
              "
            >
              Ok
            </Link>
            <Link
              href="/"
              className="
                inline-flex items-center justify-center
                bg-zinc-700/30 hover:bg-zinc-600/50
                backdrop-blur-sm
                px-6 py-3 rounded-lg
                text-white hover:text-gray-100
                shadow-md hover:shadow-lg
                transform hover:translate-y-0.5
                transition-all duration-200
                font-semibold
              "
            >
              Volver
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoPage;