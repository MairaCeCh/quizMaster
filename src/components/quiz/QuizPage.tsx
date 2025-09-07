
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Quiz from './Quiz'

interface QuizPageProps {
  cid: string
}

const QuizPage = ({ cid }: QuizPageProps) => {
  const [showQuiz, setShowQuiz] = useState(false)

  const handleStartQuiz = () => {
    setShowQuiz(true)
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-white text-center text-2xl mb-8">Categoría elegida: {cid}</p>

      {showQuiz ? (
        <Quiz cid={cid} />
      ) : (
        <div className="flex space-x-4">
          <button
            onClick={handleStartQuiz}
            className="px-6 py-2  bg-rose-600/30 hover:bg-rose-700/40  text-white rounded-md transition-colors duration-300"
          >
            Iniciar Quiz
          </button>
          <Link href="/category">
            <button className="px-6 py-2       bg-rose-600/30         hover:bg-rose-700/40  text-white rounded-md transition-colors duration-300">
              Categorías
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default QuizPage