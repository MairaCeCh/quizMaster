
// 'use client';

// import React, { useState, useEffect } from 'react'; // Importamos useState y useEffect
// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
// import { Press_Start_2P } from "next/font/google"; // Importamos tu fuente pixel

// // Carga la fuente pixel para el título si es necesario
// const pixelFont = Press_Start_2P({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-pixel",
// });

// const InfoPage = () => {
//   const searchParams = useSearchParams();
//   const type = searchParams.get('type');
//   const isSinglePlayer = type === 'single';

//   // Estado para la animación de entrada de la tarjeta
//   const [cardVisibility, setCardVisibility] = useState('opacity-0 scale-95');

//   useEffect(() => {
//     // Al montarse el componente, la tarjeta aparece suavemente
//     setCardVisibility('opacity-100 scale-100');
//   }, []);

//   return (
//     <div 
//       className={`
//         max-w-sm mx-auto mt-20 
//         bg-rose-600/20         
//         backdrop-blur-md        
//         rounded-2xl shadow-xl   
//         p-8 text-center         
//         text-white              /
//         transition-all duration-700 ease-out 
//         ${cardVisibility}       
//       `}
//     >
//       <h2 className={`text-2xl font-bold mb-4 ${pixelFont.variable} font-pixel`}>
//         {isSinglePlayer ? 'Un jugador' : 'Juego de mesa'}
//       </h2>
//       <p className="text-white text-lg mb-8"> {/* Texto blanco para contraste */}
//         {isSinglePlayer
//           ? 'Este juego es de un jugador'
//           : 'Este juego es para varios jugadores o grupos'}
//       </p>
//       <div className="flex justify-center space-x-6"> {/* Más espacio entre botones */}
//         {/* Botón "Ok" */}
//         <Link 
//           href="/category" 
//           className="
//             inline-flex items-center justify-center 
//             bg-zinc-700/30 hover:bg-zinc-600/50 /* Colores base y hover translúcidos */
//             backdrop-blur-sm                   /* Blur para el fondo del botón */
//             px-6 py-3 rounded-lg               /* Padding y bordes redondeados */
//             text-white hover:text-gray-100     /* Color del texto y hover */
//             shadow-md hover:shadow-lg          /* Sombra y sombra en hover */
//             transform hover:translate-y-0.5    /* Efecto de hundimiento */
//             transition-all duration-200        /* Transición suave */
//             font-semibold                      /* Fuente semibold para el texto */
//           "
//         >
//           Ok
//         </Link>
//         {/* Botón "Volver" */}
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
import React, { useState, useEffect, use } from 'react';
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

  const [cardVisibility, setCardVisibility] = useState('opacity-0 scale-95');

  useEffect(() => {
    setCardVisibility('opacity-100 scale-100');
  }, []);

  return (
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
          href={isSinglePlayer ? "/category" : "/"} // Change the 'Ok' button behavior
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
  );
};

export default InfoPage;