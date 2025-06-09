'use client';
import Image from 'next/image';

const productos = [
  {
    name: "Clóset Soltero 2 Puertas Corredizas con Espejo 4 Cajones Marrón/Negro Dallas Plus",
    url: "https://madesa.mx/products/closet-soltero-2-puertas-corredizas-con-espejo-4-cajones-marron-negro-dallas-plus",
    image: "//madesa.mx/cdn/shop/files/01-10947K1E4G-ambientado.jpg?v=1737378854"
  },
  {
    name: "Zapatera Isis 1 Puerta Blanco",
    url: "https://madesa.mx/products/zapatera-isis-madesa-1-puerta",
    image: "//madesa.mx/cdn/shop/products/110409.2.jpg?v=1698154648"
  },
  {
    name: "Clóset Modular Valencia 2 Cajones 129cm Marrón/Negro",
    url: "https://madesa.mx/products/closet-modular-valencia-2-cajones-129cm-marron-negro-madesa",
    image: "//madesa.mx/cdn/shop/files/01-MDDR0200407K-ambientada-closet-aberto-guarda-roupa-2-gavetas-129cm-rustic-preto-madesa.jpg?v=1717601771"
  },
  {
    name: "Cómoda Laura con 6 Cajones Blanco",
    url: "https://madesa.mx/products/comoda-laura-con-6-cajones-blanco",
    image: "//madesa.mx/cdn/shop/files/01-3435092-ambientaado.jpg?v=1737657535"
  },
  {
    name: "Clóset Matrimonial Lyon 3 Puertas Correderas 2 Cajones Negro",
    url: "https://madesa.mx/products/closet-matrimonial-madesa-lyon-3-puertas-correderas-2-cajones-negro",
    image: "//madesa.mx/cdn/shop/files/original_11a1709e-cadd-4d21-b11e-8d068ee91881.jpg?v=1717599784"
  }
  
];

export default function Muebles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {productos.map((producto, i) => (
        <a
          key={i}
          href={producto.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition"
        >
          <img
            src={producto.image}
            alt={producto.name}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="text-lg font-medium text-[#4A2E2A]">{producto.name}</h3>
        </a>
      ))}
    </div>
  );
}
