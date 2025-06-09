'use client'
import { useState } from 'react';
import Cocinas from '@/componentes/Cocinas';
import Lamparas from '@/componentes/Lamparas';
import Muebles from '@/componentes/Muebles';

export default function Catalogo() {
  const [categoriaActiva, setCategoriaActiva] = useState('cocinas');

  const Buttons = [
    { name: 'Cocinas', id: 'cocinas' },
    { name: 'Lamparas', id: 'lamparas' },
    { name: 'Muebles', id: 'muebles' },
    { name: 'Sofas', id: 'sofas' },
    { name: 'Mesas', id: 'mesas' },
    { name: 'Sillas', id: 'sillas' },
    { name: 'Escritorios', id: 'escritorios' },
  ];

  return (
    <div className="bg-[#F5E9DA] min-h-screen">
      <div className="flex flex-wrap justify-center items-center gap-2 p-4">
        {Buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => setCategoriaActiva(button.id)}
            className={`px-4 py-2 rounded-md transition font-semibold ${
              categoriaActiva === button.id
                ? 'bg-[#4A2E2A] text-white'
                : 'bg-white text-[#4A2E2A] border border-[#4A2E2A]'
            }`}
          >
            {button.name}
          </button>
        ))}
      </div>

      <div className="p-4">
        {categoriaActiva === 'cocinas' && <Cocinas />}
        {categoriaActiva === 'lamparas' && <Lamparas />}
        {categoriaActiva === 'muebles' && <Muebles/>}
        {categoriaActiva === 'sofas' && <p>🛋️ Aquí irán los sofás</p>}
        {categoriaActiva === 'mesas' && <p>🪵 Aquí irán las mesas</p>}
        {categoriaActiva === 'sillas' && <p>🪑 Aquí irán las sillas</p>}
        {categoriaActiva === 'escritorios' && <p>🖥️ Aquí irán los escritorios</p>}
      </div>
    </div>
  );
}
