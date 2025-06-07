'use client';
import { useEffect, useState } from 'react';

export default function Lamparas() {
  const [lamparas, setLamparas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://furniture-api.fly.dev/v1/products')
      .then(res => res.json())
      .then(data => {
        const filtrado = data.data.filter(p => p.category === 'lamp');
        setLamparas(filtrado);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar lámparas:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center p-4">Cargando lámparas...</p>;

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center text-xl font-bold mb-6 mt-10 ">Lámparas</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4 lg:gap-10 lg:px-10 lg:py-10">
        {lamparas.map((lampara) => (
          <div key={lampara.id} className="bg-white rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer p-4">
            <img
              src={lampara.image_path}
              alt={lampara.name}
              className="w-full h-40 mb-2 rounded lg:h-60 lg:w-90"
            />
            <h2 className="font-bold text-lg">{lampara.name}</h2>
            <p className="text-gray-600 capitalize">{lampara.category}</p>
            <p className="text-green-600 font-semibold">${lampara.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
