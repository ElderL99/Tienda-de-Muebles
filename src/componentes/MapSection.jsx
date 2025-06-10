'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const coordenadas = [19.53996246514492, -99.15317977914742];

const emojiIcon = new L.DivIcon({
  html: `<div style="font-size: 35px; line-height: 32px;">🚩</div>`,
  className: "",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export default function MapSection() {
  return (
    <MapContainer
      center={coordenadas}
      zoom={25}
      className="w-full h-[300px] rounded-lg md:h-[400px] lg:h-[500px]"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordenadas} icon={emojiIcon}>
        <Popup>
          🤩 Tienda de Muebles <br />
          Carr. Tenayuca Chalmita 23, CDMX <br />
          <a
            href="https://maps.app.goo.gl/tNzPKhhxUGnHcGqu7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Ver en Google Maps
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
