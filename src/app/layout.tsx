import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Menu from "@/components/menu/Menu";

import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Quiz Master",
  description: "Juego de preguntas y respuestas",
  keywords: "juego, trivia, conocimiento, cultura general, desafío, inteligencia, lógica, educativo, divertido, competencia, mental, entretenimiento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
  
      <body className={`${pixelFont.variable} antialiased h-screen`}>

        <NavBar />
        <Menu />
        {children}
      </body>
    </html>
  );
}
