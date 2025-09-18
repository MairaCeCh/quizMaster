'use client';
import React from 'react';
import Link from 'next/link';

const Dice = () => {
  return (
    <div 
      className="
        flex flex-col items-center justify-center 
     
       
      "
    >
      <h1 
        className="
          text-4xl font-bold mb-6 text-white text-center 
          cursor-pointer 
          hover:scale-105 transition-transform duration-300
        "
      >
        Lanza el dado <br /> 
        <span className="text-6xl animate-bounce-slow inline-block mt-2">🎲</span>
      </h1>

      <button
        className="
          mt-4 
          px-8 py-4 
          bg-zinc-700/50 hover:bg-zinc-600/70
          backdrop-blur-sm
          rounded-xl
          text-white 
          font-semibold 
          shadow-md hover:shadow-lg
          transform hover:scale-105
          transition-all duration-300
        "
      >
    <Link href="/" >Volver</Link>
      </button>
    </div>
  );
};

export default Dice;