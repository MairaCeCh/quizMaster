
"use client";
import Link from "next/link";
import React, { useState } from "react";

const Start = () => {
  const [startClicked, setStartClicked] = useState(false);

  const handleStartClick = () => {
    setStartClicked(true);
    // Puedes agregar un delay si quieres que la animación termine antes de navegar
    // setTimeout(() => {
    //   window.location.href = "/menu";
    // }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-24 text-white font-pixel">
      {/* <h1 
        className={`text-white text-3xl font-[var(--font-pixel)] masterquiz-text ${startClicked ? 'animate-up' : ''}`}
      >
        Masterquiz!
      </h1> */}

      <Link
        href={"/menu"}
        onClick={handleStartClick}
        className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
      >
        Empecemos
      </Link>
    </div>
  );
};

export default Start;