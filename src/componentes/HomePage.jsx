"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#F5E9DA] w-full min-h-screen flex flex-col items-center text-[#4A2E2A]">
      {/* Hero Section */}
      <section className="w-full px-6 py-16 text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl lg:text-6xl font-bold">Diseño y estilo para tu hogar</h1>
        <p className="text-lg max-w-xl">
          Muebles modernos, elegantes y accesibles. Descubre nuestras colecciones para transformar tu espacio.
        </p>
        <Link
          href="/catalogo"
          className="bg-[#4A2E2A] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#3b241f] transition"
        >
          Ver Catálogo
        </Link>
        <Image
          src="/sala.jpg"
          alt="Hero muebles"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg mt-8"
        />
      </section>

      {/* Beneficios */}
      <section className="w-full px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {[
          { icon: "🚚", title: "Envío rápido" },
          { icon: "🛠️", title: "Fácil armado" },
          { icon: "🪑", title: "Estilo moderno" },
          { icon: "💳", title: "Pagos a MSI" },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-6 shadow">
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-lg font-bold">{item.title}</h3>
          </div>
        ))}
      </section>

      {/* Categorías Destacadas */}
      <section className="w-full px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Categorías Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Cocinas", img: "/cocina.jpg", href: "/catalogo"  },
            { name: "Recámaras", img: "/recamara.jpg", href: "/catalogo#Lamparas" },
            { name: "Lámparas", img: "/lamparas.jpg", href: "/catalogo#" },
          ].map((cat, i) => (
            <Link
              key={i}
              href={cat.href}
              className="bg-white rounded-lg  shadow-md hover:scale-105 transition  "
            >
              <Image
                src={cat.img}
                alt={cat.name}
                width={400}
                height={250}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4 font-semibold">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full px-6 py-16 text-center bg-[#4A2E2A] text-white">
        <h2 className="text-3xl font-bold mb-4">¡Haz de tu casa un lugar especial!</h2>
        <p className="mb-6">Explora todo nuestro catálogo y encuentra el mueble perfecto para ti.</p>
        <Link
          href="/catalogo"
          className="bg-white text-[#4A2E2A] px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
        >
          Ir al Catálogo
        </Link>
      </section>
    </main>
  );
}
