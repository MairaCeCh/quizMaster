'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import data from '../../app/questionDB.json'

interface Props {
  cid: string
}

const Quiz: React.FC<Props> = ({ cid }) => {
  const preguntasFiltradas = data.filter(p => p.category === cid)
  const preguntaRandom = preguntasFiltradas[Math.floor(Math.random() * preguntasFiltradas.length)]

  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<string | null>(null)

  const opciones = preguntaRandom
    ? [preguntaRandom.correct_answer, ...preguntaRandom.incorrect_answers].sort(() => Math.random() - 0.5)
    : []

  const getColor = (opcion: string) => {
    if (!respuestaSeleccionada) return 'bg-gray-700 hover:bg-gray-600'
    if (opcion === preguntaRandom?.correct_answer) return 'bg-green-600'
    if (opcion === respuestaSeleccionada) return 'bg-red-600'
    return 'bg-gray-700'
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="text-white text-lg bg-pink-800 px-6 py-5 rounded-md max-w-xl w-full">
        <h1 className="mb-4 text-2xl font-bold text-center">Categoría: {cid}</h1>
        {preguntaRandom ? (
          <div>
            <p className="font-semibold text-lg mb-4 text-center">{preguntaRandom.question}</p>
            <div className="flex flex-col space-y-3">
              {opciones.map((opcion, index) => (
                <button
                  key={index}
                  onClick={() => setRespuestaSeleccionada(opcion)}
                  className={`py-2 px-4 rounded-md transition-colors duration-300 ${getColor(opcion)}`}
                  disabled={!!respuestaSeleccionada}
                >
                  {opcion}
                </button>
              ))}
            </div>
            {respuestaSeleccionada && (
              <p className="mt-6 text-center text-sm text-gray-400">
                {respuestaSeleccionada === preguntaRandom.correct_answer
                  ? '✅ ¡Correcto!'
                  : `❌ Incorrecto. La respuesta correcta es ${preguntaRandom.correct_answer}`}
              </p>
            )}
          </div>
        ) : (
          <p>No se encontraron preguntas para esta categoría.</p>
        )}
        <Link
          href="/category"
          className="block mt-8 underline text-blue-400 hover:text-blue-300 text-center"
        >
          Volver
        </Link>
      </div>
    </div>
  )
}

export default Quiz
