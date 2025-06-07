'use client';
import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const logo = '/@/src/herramientas/svg/logo.svg';
  return (
    <nav className="w-full  shadow-2xl  bg-[#F5E9DA] duration-300 flex flex-col gap-5 p-5 lg:flex-row ">
      {/* Logo + Botón */} 
      <div className="flex justify-between items-center  md:flex   lg:justify-between  lg:w-full  ">
        <h1 className="text-xl font-bold text-black lg:text-2xl">MTD Furniture </h1>

        <button
          className="md:hidden text-3xl"
          onClick={() => setAbierto(!abierto)}
        >
          ☰
        </button>
      </div>

      {/* Menú desplegable */}
      <ul
        className={`${abierto ? 'block' : 'md:block  hidden'} flex flex-col space-y-5 `}
      >
        <Link href="/" className="p-4 border-b bg-[#F5E9DA] md:border-none text-black font-bold  hover:cursor-pointer  hover:text-2xl hover:rounded-md">
          Inicio
        </Link>
        <Link href="/catalogo" className="p-4 border-b bg-[#F5E9DA] md:border-none text-black font-bold hover:cursor-pointer  hover:text-2xl hover:rounded-md">
          Catálogo
        </Link>
        <Link href="/contacto" className="p-4 md:border-none bg-[#F5E9DA] text-black bf font-bold hover:cursor-pointer  hover:text-2xl hover:rounded-md">
          Contacto 
        </Link>
      </ul>
    </nav>
  );
}
