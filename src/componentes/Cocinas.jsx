import React from 'react'
import muebles from '../utils/muebles'

export default function Cocinas() {
  return (
    <div className="flex flex-col  w-full h-full gap-10">
      <h2 className="text-2xl font-bold text-center p-10">Cocinas</h2>
      <div className="flex flex-col-reverse gap-4   lg:grid lg:grid-cols-3 lg:gap-10 lg:px-50 lg:py-10">
        {muebles.itemListElement.map((cocina, index) => (
          <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-4" key={index}>
            
            <img src={cocina.image[0]} alt={cocina.name} className="w-full p-4 gap-4 h-auto rounded-lg shadow-lg" />
            <h2 className="text-center p-4 font-bold">{cocina.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
