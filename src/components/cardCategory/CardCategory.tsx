import React from 'react';
import Link from 'next/link';

const categorias = [
  'Ciencia',
  'Espectáculo',
  'Historia-Geografía',
  'Deporte',
  'Videojuegos',
  'Naturaleza',
];

function CardCategory() {
  return (
    <div className="flex justify-center items-center ml-[80px] min-h-screen">
      <div className="grid grid-cols-3 grid-rows-2 gap-6 p-6">
        {categorias.map((nombre) => (
          <Link
            key={nombre}
            href={`/category/${encodeURIComponent(nombre)}`}
            className="flex items-center justify-center bg-blue-200 text-blue-900 font-semibold rounded-lg shadow-md p-4 hover:bg-blue-300 transition"
          >
            {nombre}
          </Link>
        ))}
      </div>
    </div>
  );
}


export default CardCategory