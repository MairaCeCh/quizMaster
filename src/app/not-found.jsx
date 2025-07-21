import React from 'react';
import Link from 'next/link';


const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <img
        src="https://imgs.search.brave.com/QGX_8atvDpLelVQkYTsMu_fcw4rKgN3g9zN-UfmGsNk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/NDA0LWVycm9yLWJh/Y2tncm91bmRfMjMt/MjE0ODA3MTc0NC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw"
        alt="Error 404 ilustración"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <p>
        <Link href="/">🔙 Volver al inicio</Link>
      </p>
    </div>
  );
};

export default NotFound;
