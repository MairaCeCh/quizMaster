
// // 'use client';

// // import React, { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { useSearchParams } from 'next/navigation';
// // import { Press_Start_2P } from "next/font/google";

// // const pixelFont = Press_Start_2P({
// //   weight: "400",
// //   subsets: ["latin"],
// //   variable: "--font-pixel",
// // });

// // interface NavBarProps {
// //   onDiceClick: () => void; // Prop para la función del dado
// // }

// // const DiceIcon = ({ onClick }: { onClick: () => void }) => (
// //   <svg
// //     xmlns="http://www.w3.org/2000/svg"
// //     fill="currentColor"
// //     viewBox="0 0 24 24"
// //     className="w-6 h-6 text-white cursor-pointer"
// //     onClick={onClick}
// //   >
// //     <path d="M21 3H3v18h18V3zm-2 2v14H5V5h14zM8 8a1 1 0 110 2 1 1 0 010-2zm8 0a1 1 0 110 2 1 1 0 010-2zm-4 4a1 1 0 110 2 1 1 0 010-2z" />
// //   </svg>
// // );

// // // El componente NavBar espera la prop 'onDiceClick'
// // const NavBar = ({ onDiceClick }: NavBarProps) => {
// //   const searchParams = useSearchParams();
// //   const type = searchParams.get('type');
// //   const [navPosition, setNavPosition] = useState('left-[-20rem]');

// //   useEffect(() => {
// //     setNavPosition('left-5');
// //   }, []);

// //   return (
// //     <aside
// //       className={`
// //         w-40
// //         h-auto
// //         min-h-[200px]
// //         bg-cyan-600/20
// //         backdrop-blur-sm
// //         absolute top-1/2 -translate-y-1/2
// //         left-1
// //         p-4
// //         rounded-2xl
// //         shadow-lg
// //         text-white
// //         flex flex-col justify-between items-center
// //         transition-all duration-800 ease-in-out
// //         hover:translate-x-10
// //         ${navPosition}
// //         z-50
// //       `}
// //     >
// //       {/* Logo */}
// //       <div className={`text-white text-xl font-bold mb-4 ${pixelFont.variable} font-pixel`}>
// //         MQ!
// //       </div>

// //       {/* Íconos / botones */}
// //       <ul className="space-y-4 w-full text-center">
// //         {type === 'board' && (
// //           <li className="flex items-center justify-center gap-2 text-white">
// //             <DiceIcon onClick={onDiceClick} />
// //           </li>
// //         )}
// //       </ul>

// //       {/* Botón Volver */}
// //       <div className="mt-auto w-full flex justify-center">
// //         <Link
// //           href="/"
// //           className="
// //             inline-flex items-center justify-center
// //             w-full
// //             bg-zinc-700/30
// //             px-4 py-2 rounded-md
// //             text-zinc-500 hover:text-gray-100
// //             hover:bg-zinc-600/50
// //             shadow-md hover:shadow-lg
// //             transition-all duration-200
// //           "
// //         >
// //           Volver
// //         </Link>
// //       </div>
// //     </aside>
// //   );
// // };

// // export default NavBar;
// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
// import { Press_Start_2P } from "next/font/google";
// import { link } from 'fs';

// const pixelFont = Press_Start_2P({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-pixel",
// });



// // The new DiceIcon component using a Unicode character
// <Link href="/dice" > 🎲
//  </Link>  

    


// // The NavBar component expects the 'onDiceClick' prop
// const NavBar = ({ onDiceClick }: NavBarProps) => {
//   const searchParams = useSearchParams();
//   const type = searchParams.get('type');
//   const [navPosition, setNavPosition] = useState('left-[-20rem]');

//   useEffect(() => {
//     setNavPosition('left-5');
//   }, []);

//   return (
//     <aside
//       className={`
//         w-40
//         h-auto
//         min-h-[200px]
//         bg-cyan-600/20
//         backdrop-blur-sm
//         absolute top-1/2 -translate-y-1/2
//         left-1
//         p-4
//         rounded-2xl
//         shadow-lg
//         text-white
//         flex flex-col justify-between items-center
//         transition-all duration-800 ease-in-out
//         hover:translate-x-10
//         ${navPosition}
//         z-50
//       `}
//     >
//       {/* Logo */}
//       <div className={`text-white text-xl font-bold mb-4 ${pixelFont.variable} font-pixel`}>
//         MQ!
//       </div>

//       {/* Icons / buttons */}
//       <ul className="space-y-4 w-full text-center">
//         {type === 'board' && (
//           <li className="flex items-center justify-center gap-2 text-white">
//             <DiceIcon onClick={onDiceClick} />
//           </li>
//         )}
//       </ul>

//       {/* Back button */}
//       <div className="mt-auto w-full flex justify-center">
//         <Link
//           href="/"
//           className="
//             inline-flex items-center justify-center
//             w-full
//             bg-zinc-700/30
//             px-4 py-2 rounded-md
//             text-zinc-500 hover:text-gray-100
//             hover:bg-zinc-600/50
//             shadow-md hover:shadow-lg
//             transition-all duration-200
//           "
//         >
//           Volver
//         </Link>
//       </div>
//     </aside>
//   );
// };

// export default NavBar;
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

interface NavBarProps {
  // onDiceClick has been removed as it's no longer used
}

// const DiceIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//     className="w-6 h-6 text-white"
//   >
//     <path d="M21 3H3v18h18V3zm-2 2v14H5V5h14zM8 8a1 1 0 110 2 1 1 0 010-2zm8 0a1 1 0 110 2 1 1 0 010-2zm-4 4a1 1 0 110 2 1 1 0 010-2z" />
//   </svg>
// );

// The NavBar component no longer expects the 'onDiceClick' prop
const NavBar = ({ }: NavBarProps) => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const [navPosition, setNavPosition] = useState('left-[-20rem]');

  useEffect(() => {
    setNavPosition('left-5');
  }, []);

  return (
    <aside
      className={`
        w-40
        h-auto
        min-h-[200px]
        bg-cyan-600/20
        backdrop-blur-sm
        absolute top-1/2 -translate-y-1/2
        left-1
        p-4
        rounded-2xl
        shadow-lg
        text-white
        flex flex-col justify-between items-center
        transition-all duration-800 ease-in-out
        hover:translate-x-10
        ${navPosition}
        z-50
      `}
    >
      {/* Logo */}
      <div className={`text-white text-xl font-bold mb-4 ${pixelFont.variable} font-pixel`}>
        MQ!
      </div>

      {/* Íconos / botones */}
      <ul className="space-y-4 w-full text-center">
        {type === 'board' && (
          <li className="flex items-center justify-center gap-2 text-white">
            <Link href="/dice">
             🎲
            </Link>
          </li>
        )}
      </ul>

      {/* Botón Volver */}
      <div className="mt-auto w-full flex justify-center">
        <Link
          href="/"
          className="
            inline-flex items-center justify-center
            w-full
            bg-zinc-700/30
            px-4 py-2 rounded-md
            text-zinc-500 hover:text-gray-100
            hover:bg-zinc-600/50
            shadow-md hover:shadow-lg
            transition-all duration-200
          "
        >
          Volver
        </Link>
      </div>
    </aside>
  );
};

export default NavBar;