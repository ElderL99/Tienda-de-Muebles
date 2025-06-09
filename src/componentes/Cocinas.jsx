'use client';
import React from 'react';
import muebles from '../utils/muebles'; // Asegúrate que este archivo existe y exporta el JSON completo

export default function Muebles() {
  return (
    <div className="flex flex-col w-full h-full gap-10">
      <div className="flex flex-col-reverse gap-4 md:px-25 md:flex md:flex-col-3 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-25 lg:py-10">
        {muebles.itemListElement.map((mueble, index) => (
          <div className="bg-[#FFFFFF] rounded-lg shadow-lg md:p-4" key={index}>
            <a href={mueble.url} target="_blank" rel="noopener noreferrer">
              <img
                src={mueble.image[0]}
                alt={mueble.name}
                className="w-full p-2 gap-4 h-auto rounded-lg shadow-lg"
              />
              <h2 className="text-center p-4 font-bold">{mueble.name}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
