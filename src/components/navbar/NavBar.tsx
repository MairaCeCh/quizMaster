import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div >
      <h1 className="flex justify-center items-center text-3xl font-bold h-[200px]"> <Link href="/">Masterquiz!</Link> </h1>

      <aside className="w-30 h-screen bg-yellow-500 shadow-lg p-4 fixed left-0 top-0">

  <ul className="space-y-2">
  
    <li><a href="#" className="text-blaxk-700 hover:text-blue-500">Salir</a></li>
  </ul>
</aside>

    </div>
  )
}

export default NavBar
