
"use client"
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Menu from "@/components/menu/Menu";
import Loading from "./loading";
import { Press_Start_2P } from "next/font/google";
import React, { useState, useEffect } from "react";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="es">
      <body className={`${pixelFont.variable} antialiased h-screen overflow-hidden`}>
        {isLoading ? <Loading /> : (
          <>
            <NavBar />
            <Menu />
           
           <main className="flex flex-col items-center justify-start w-full min-h-[40vh] overflow-hidden">
  {children}
</main>
          </>
        )}
      </body>
    </html>
  );
}