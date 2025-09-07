
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
    <div className="max-w-xl mx-auto mt-10 bg-rose-600/20 rounded-xl shadow-lg p-6 overflow-hidden">
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        {categorias.map((nombre) => (
          <Link
            key={nombre}
            href={`/category/${encodeURIComponent(nombre)}`}
            className="
              flex items-center justify-center
              w-full h-full
              bg-rose-600/30
              hover:bg-rose-700/40
              text-white
              font-semibold rounded-lg
              shadow-lg
              hover:shadow-md
              transform hover:translate-y-0.5
              transition-all duration-300 ease-in-out
              p-4 min-w-[120px] min-h-[60px]
            "
          >
            {nombre}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardCategory;
