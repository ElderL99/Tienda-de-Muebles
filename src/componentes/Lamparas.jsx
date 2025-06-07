'use client';
import { useEffect, useState } from 'react';

export default function Lamparas() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://furniture-api.fly.dev/v1/products')
      .then(res => res.json())
      .then(data => {
        const productosFiltrados = data.data.filter(
          (producto) => producto.category?.toLowerCase().includes('lampara')
        );
        setProductos(productosFiltrados);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar productos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center p-4">Cargando lámparas...</p>;

  return (
    <div className="grid grid-cols-2 bg-[#FFFFFF]  sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4 lg:gap-10 lg:px-10 lg:py-10">
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer p-4"
        >
          <img
            src={producto.image_path}
            alt={`Foto de ${producto.name}`}
            className="w-full h-40 object-contain mb-2 rounded lg:h-60 lg:w-90"
          />
          <h2 className="font-bold text-lg">{producto.name}</h2>
          <p className="text-gray-600 capitalize">{producto.category}</p>
          <p className="text-green-600 font-semibold">${producto.price}</p>
        </div>
      ))}
    </div>
  );
}
