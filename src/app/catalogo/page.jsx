'use client '
import Cocinas from '@/componentes/Cocinas';
import Lamparas from '@/componentes/Lamparas';


export default function Catalogo() {
  return (
    <div className=" bg-[#F5E9DA]">
      
      <div id="cocinas">
        <div><Cocinas className="" /></div>
      </div>
      <div id="lamparas">
        <div><Lamparas /></div>
      </div>


    </div>
  )
}