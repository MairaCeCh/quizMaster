
import Link from 'next/link';
import React from 'react'


export const metadata = {
  title: 'Quiz Master ',
};

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-[40vh]">
    <div><h1>hola</h1>
      <Link href={"/menu"} className="mt-4 text-blue-400 hover:underline">empecemos 3</Link>
    </div>
    </div>
  )
}

export default page