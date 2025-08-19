
"use client"
// import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Menu from "@/components/menu/Menu";
import Loading from "./loading"; // Importa el componente Loading

import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});



import React, { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carga inicial, reemplaza con tu lógica real
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="es">
      <body className={`${pixelFont.variable} antialiased h-screen`}>
        <NavBar />
        <Menu />
        {isLoading ? <Loading /> : children}
      </body>
    </html>
  );
}