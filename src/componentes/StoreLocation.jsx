'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';

export default function ContactSection() {
  const coordenadas = [19.53996246514492, -99.15317977914742];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const emojiIcon = new L.DivIcon({
    html: `<div style="font-size: 35px; line-height: 32px;">🚩</div>`,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>

      {/* Contenedor principal con disposición responsive */}
      <div className="flex flex-col md:flex-row gap-8 ">
        {/* Mapa - siempre visible */}
        <div className="w-full md:w-1/2">
          <MapContainer
            center={coordenadas}
            zoom={25}
            className="w-full  h-[300px] rounded-lg md:h-[400px] lg:h-[500px]"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordenadas} icon={emojiIcon}>
              <Popup>
                🤩 Tienda de Muebles <br />
                Carr. Tenayuca Chalmita 23, CDMX <br />
                <a href="https://maps.app.goo.gl/tNzPKhhxUGnHcGqu7" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Ver en Google Maps
                </a>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Formulario - siempre visible */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Envíanos un mensaje</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Botón de WhatsApp */}
          <div className="mt-6">
            <a
              href="https://wa.me/7204754565"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24px"
                height="24px"
                className="mr-2"
              >
                <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,23.7C5,13.5,13.5,5,23.7,5c5.1,0,9.8,1.9,13.4,5c3.6,3.1,5.6,7.4,5.6,12.1c0,10.2-8.5,18.7-18.7,18.7c-3.5,0-6.9-0.9-9.8-2.7L4.9,43.3z" />
                <path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5l2.5-9.2c-1.9-3-2.9-6.5-2.9-10.2C4,12.8,12.8,4,23.7,4c5.3,0,10.1,2,13.8,5.3c3.7,3.3,5.6,7.8,5.6,12.7c0,10.9-8.8,19.7-19.7,19.7c-3.7,0-7.2-1-10.2-2.9l-9.2,2.5C5,43.8,4.9,43.8,4.9,43.8z" />
                <path fill="#fff" d="M12.3,32.5c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.7,0-1l4.1-4.1c0.3-0.3,0.7-0.3,1,0s0.3,0.7,0,1l-4.1,4.1C12.7,32.5,12.5,32.5,12.3,32.5z" />
                <path fill="#fff" d="M15.6,35.8c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.7,0-1l4.1-4.1c0.3-0.3,0.7-0.3,1,0s0.3,0.7,0,1l-4.1,4.1C16,35.8,15.8,35.8,15.6,35.8z" />
                <path fill="#fff" d="M18.9,39.1c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.7,0-1l4.1-4.1c0.3-0.3,0.7-0.3,1,0s0.3,0.7,0,1l-4.1,4.1C19.3,39.1,19.1,39.1,18.9,39.1z" />
                <path fill="#cfd8dc" d="M23.7,43.7c-5.3,0-10.3-2-14.1-5.7l-0.7,2.6l2.6-0.7c3.7,3.8,8.7,5.7,14.1,5.7c11,0,20-9,20-20c0-5.4-2.1-10.4-5.8-14.1c-3.7-3.7-8.7-5.8-14.1-5.8c-11,0-20,9-20,20c0,3.7,1,7.2,2.9,10.2l-2.5,9.2l9.2-2.5c3,1.9,6.5,2.9,10.2,2.9c5.4,0,10.4-2.1,14.1-5.8c3.7-3.7,5.8-8.7,5.8-14.1C43.7,23.7,43.7,23.7,23.7,43.7z" />
                <path fill="#40c351" d="M23.7,5c5.1,0,9.8,1.9,13.4,5c3.6,3.1,5.6,7.4,5.6,12.1c0,10.2-8.5,18.7-18.7,18.7c-3.5,0-6.9-0.9-9.8-2.7L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,23.7C5,13.5,13.5,5,23.7,5 M23.7,4C12.8,4,4,12.8,4,23.7c0,3.6,0.9,7,2.6,10l-2.5,9.2c-0.1,0.3,0,0.7,0.3,0.9c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.1,0,0.2,0l9.2-2.5c3,1.7,6.5,2.6,10.2,2.6c10.9,0,19.7-8.8,19.7-19.7c0-5.3-2-10.1-5.6-13.8C33.8,6,29,4,23.7,4L23.7,4z" />
              </svg>
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}