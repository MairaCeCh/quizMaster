"use client";
import Link from "next/link";
import React from "react";

const Start = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white font-pixel">
      <h1 className="text-4xl mb-6">Masterquiz!</h1>
      <button
        onClick={onStart}
        className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
      >
        Empecemos
      </button>

      <Link
        href="/menu"
        className="mt-4 text-blue-400 hover:underline"
      >empecemos 2</Link>
    </div>
  );
};

export default Start;
