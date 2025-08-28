import React from 'react';
import Link from 'next/link';

const categorias = [
  'Ciencia',
  'Espectaculo',
  'Historia-y-Geografia',
  'Deporte',
  'cultura-pop',
  'naturaleza',
];

function CardCategory() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-6">
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        {categorias.map((nombre) => (
          <Link
            key={nombre}
            href={`/category/${encodeURIComponent(nombre)}`}
            className="flex items-center justify-center bg-blue-200 text-blue-900 font-semibold rounded-lg shadow-md p-4 hover:bg-blue-300 transition min-w-[120px] min-h-[60px]"
          >
            {nombre}
          </Link>
        ))}
      </div>
    </div>
  );
}





export default CardCategory