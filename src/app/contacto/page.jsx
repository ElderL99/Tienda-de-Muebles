
import React from 'react'
import StoreLocation from "@/componentes/StoreLocation";

export default function page() {
  return (
    <div className="bg-[#F5E9DA] w-full h-full flex flex-col-2 p-30 gap-10">
      
      <StoreLocation   />
      <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
                <div id="Ubicacion" className="w-full h-full flex flex-col gap-4 justify-center items-center">
                <h2 className="text-2xl font-bold">Ubicación</h2>
                <p className="text-lg text-center text-black">Carr. Tenayuca Chalmita 23, CDMX</p>
                <a className="text-blue-500 underline" href="https://maps.app.goo.gl/tNzPKhhxUGnHcGqu7" target="_blank" rel="noopener noreferrer">
                    Ver en Google Maps
                </a>
                </div>

                <div id="Whatsapp" className=""> 
                  <h2 className="">Whatsapp</h2>
                  <p className="">+52 720 475 4565</p>
                  <a className="text-blue-500 underline" href="https://wa.me/7204754565" target="_blank" rel="noopener noreferrer">
                    Abrir WhatsApp
                  </a>
                </div>
                
            </div>
    </div>
  )
}