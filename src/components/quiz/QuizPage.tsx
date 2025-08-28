
// 'use client'

// import React, { useState } from 'react'
// import Link from 'next/link'
// import Quiz from './Quiz'

// interface QuizPageProps {
//   cid: string
// }

// const QuizPage = ({ cid }: QuizPageProps) => {
//   const [showQuiz, setShowQuiz] = useState(false)

//   const handleStartQuiz = () => {
//     setShowQuiz(true)
//   }

//   return (
//     <div className="">
//       <p className="text-white text-center text-2xl">Categoría elegida: {cid}</p>

//       {showQuiz ? (
//         <Quiz cid={cid} />
//       ) : (
//         <div className="flex space-x-4">
//           <button
//             onClick={handleStartQuiz}
//             className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
//           >
//             Iniciar Quiz
//           </button>
//           <Link href="/category">
//             <button className="px-6 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition-colors duration-300">
//               Categorías
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   )
// }

// export default QuizPage
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
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
          >
            Iniciar Quiz
          </button>
          <Link href="/category">
            <button className="px-6 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition-colors duration-300">
              Categorías
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default QuizPage