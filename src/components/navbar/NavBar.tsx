
'use client'; 

import React, { useState, useEffect } from 'react'; 
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
  const [navPosition, setNavPosition] = useState('left-[-20rem]'); 
  useEffect(() => {

    setNavPosition('left-0');
  }, []);

  return ( 
    <aside className={` 
       hover:translate-x-12
        w-30 h-96 
        bg-cyan-600/20  
        backdrop-blur-sm     
        absolute top-40 left-5
        p-4  
        rounded-lg         
        shadow-lg 
        text-white             
        flex flex-col justify-between  
        transition-all duration-1000 ease-in-out 
        ${navPosition} 
      `}> 
      <ul className="space-y-4">
        {type === 'board' && ( 
          <li className="flex items-center gap-2 text-white">
            <DiceIcon />
          </li> 
        )} 
      </ul> 
      <div className="mt-auto">  
        <Link href="/" className="text-zinc-500 hover:text-gray-800 transition-colors duration-200"> 
          Volver 
        </Link> 
      </div> 
    </aside> 
  ); 
}; 

export default NavBar;