
'use client';

import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Background from "@/components/background/Background";

import { Press_Start_2P } from "next/font/google";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [showGiven, setShowGiven] = useState(false);

  return (
    <html lang="es">
      <body className={`${pixelFont.variable} p-5 antialiased overflow-hidden relative h-screen`}>
        
        {/* Fondo siempre fijo */}
        <Background />

        <AnimatePresence mode="wait">
          {!showGiven ? (
            <motion.div
              key="main-content"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
              className="w-full h-full relative"
            >
              {/* NavBar solo se mueve horizontalmente */}
              {!isHomePage && (
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
                  exit={{ x: -300, opacity: 0, transition: { duration: 0.6 } }}
                  className="absolute top-1/2 -translate-y-1/2 z-50"
                >
                  <NavBar onDiceClick={() => setShowGiven(true)} />
                </motion.div>
              )}

              {/* Contenido principal solo se mueve verticalmente */}
              <motion.main
                initial={{ y: 0 }}
                exit={{ y: -300, transition: { duration: 0.6 } }}
                className="flex flex-col items-center justify-center w-full h-full text-white"
              >
                <Link href={"/"} className={`text-white text-3xl font-[var(--font-pixel)]`}>
                  Masterquiz!
                </Link>
                {children}
              </motion.main>
            </motion.div>
          ) : (
            <motion.div
              key="dice"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 200 }}
              transition={{ duration: 0.6 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              <Dice onClose={() => setShowGiven(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
