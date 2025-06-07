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
       <Link href="/"> <h1 className="text-xl font-bold text-[#4A2E2A] lg:text-4xl">MTD Furniture </h1></Link>

        <button
          className="lg:hidden text-3xl"
          onClick={() => setAbierto(!abierto)}
        >
          ☰
        </button>
      </div>

      {/* Menú desplegable */}
      <ul
        className={`${abierto ? 'block' : 'lg:block  hidden'} flex flex-col space-y-5`}
      >
        <Link href="/" className="p-4 border-b bg-[] md:border-none text-black font-bold  hover:cursor-pointer  hover:bg-[#4A2E2A] hover:text-white ">
          Inicio
        </Link>
        <Link href="/catalogo" className="p-4 border-b bg-[#F5E9DA] md:border-none text-black font-bold hover:cursor-pointer  hover:bg-[#4A2E2A] hover:text-white ">
          Catálogo
        </Link>
        <Link href="/contacto" className="p-4 md:border-none bg-[#F5E9DA] text-black bf font-bold hover:cursor-pointer  hover:bg-[#4A2E2A] hover:text-white ">
          Contacto 
        </Link>
      </ul>
    </nav>
  );
}
