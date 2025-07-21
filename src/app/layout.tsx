import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Menu from "@/components/menu/Menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Quiz Master",
  description: "Juego de preguntas y respuesta",
  keywords:"juego, trivia, conocimiento, cultura general, desafío, inteligencia, lógica, educativo, divertido, competencia, mental, entretenimiento"

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <NavBar></NavBar>
        <Menu></Menu>
        {children}
      </body>
    </html>
  );
}
