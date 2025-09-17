'use client';
import React from 'react';
import Link from 'next/link';

// Make sure the parent component passes an onDiceRoll prop
const Dice = ({ }) => {
  return (
    <div 
      className="
        flex flex-col items-center justify-center 
        w-full h-full 
        text-white 
        relative
        bg-rose-600/20  /* Transparent background with a subtle rose tint */
        rounded-2xl      /* Rounded corners for a modern look */
        shadow-xl        /* Deep shadow for depth */
        p-8              /* Padding for internal spacing */
        animate-fade-in  /* Optional: Add an animation class for a smooth entry */
      "
    >
      <h1 
        className="
          text-4xl font-bold mb-6 text-white text-center 
          cursor-pointer 
          hover:scale-105 transition-transform duration-300
        "
        // This is the key change!
      >
        Lanza el dado <br /> 
        <span className="text-6xl animate-bounce-slow inline-block mt-2">🎲</span>
      </h1>

      <button
       
        className="
          mt-4 
          px-8 py-4 
          bg-zinc-700/50 hover:bg-zinc-600/70 /* Semi-transparent button with hover effect */
          backdrop-blur-sm                   /* Blur on the button itself */
          rounded-xl                         /* More rounded corners for the button */
          text-white 
          font-semibold 
          shadow-md hover:shadow-lg          /* Subtle shadow change on hover */
          transform hover:scale-105          /* Grow effect on hover */
          transition-all duration-300        /* Smooth transition for all effects */
        "
      >

    <Link href="/" >Volver</Link>
        
      </button>
    </div>
  );
};

export default Dice;