"use client";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Menu from "@/components/menu/Menu";
import Loading from "./loading";
import Background from "@/components/background/Background";
import { Press_Start_2P } from "next/font/google";
import React, { useState, useEffect } from "react";
import Start from "@/components/start/Start";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showStart, setShowStart] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setShowStart(false);
  };

  return (
    <html lang="es">
      <body className={`${pixelFont.variable} antialiased h-screen overflow-hidden relative`}>
        <Background />
        {/* {isLoading ? (
          <Loading />
        ) : showStart ? (
        
           <main className="flex flex-col items-center justify-start w-full min-h-[40vh] overflow-hidden text-white">
              {children}
            </main>
        ) : (
          <>
            <NavBar />
       
            <Start onStart={handleStart} />
          </>
        )} */}
        <NavBar />
        <main className="flex flex-col items-center justify-start w-full min-h-[40vh] overflow-hidden text-white">
          {children}
        </main>
        
      </body>
    </html>
  );
}
