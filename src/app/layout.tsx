
"use client";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Background from "@/components/background/Background";
import { Press_Start_2P } from "next/font/google";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";


const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
  
    return () => clearTimeout(timer);
  }, []);

  const isHomePage = pathname === "/";

  return (
    <html lang="es">
      <body className={`${pixelFont.variable} p-5 antialiased overflow-hidden relative h-screen`}>
        <Background />
        {!isHomePage && <NavBar />}
        <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden text-white">
                <h1 
        className={`text-white text-3xl font-[var(--font-pixel)]`}
      >
        Masterquiz!
      </h1>
          {children}
        </main>
      </body>
    </html>
  );
}