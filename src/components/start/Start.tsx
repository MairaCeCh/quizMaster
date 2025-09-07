
"use client";
import Link from "next/link";
import React, { useState } from "react";

const Start = () => {
  const [startClicked, setStartClicked] = useState(false);

  const handleStartClick = () => {
    setStartClicked(true);
  
  };

  return (
    <div className="flex flex-col items-center justify-center h-24 text-white font-pixel">
    

      <Link
        href={"/menu"}
        onClick={handleStartClick}
        className="flex items-center gap-2  bg-rose-600/20   text-black px-8 py-2 rounded-lg shadow-lg"
      >
        Empecemos
      </Link>
    </div>
  );
};

export default Start;