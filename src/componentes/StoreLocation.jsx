'use client';
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';


export default function StoreLocation() {
    const coordenadas = [19.53996246514492, -99.15317977914742];


    const emojiIcon = new L.DivIcon({
        html: `<div style="font-size: 35px; line-height: 32px;">🚩</div>`,
        className: "",
        iconSize: [32, 32],
        iconAnchor: [16, 32], 
    });

    return (
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-center lg:items-center lg:p-10 lg:gap-10 lg:h-[90%] lg:w-[90%]">

            <div className="w-full h-full    ">
            <MapContainer
                center={coordenadas}
                zoom={17}
                className="h-[300px] w-full rounded-lg shadow-lg lg:h-[800px] lg:w-[800px]"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={coordenadas} icon={emojiIcon}>
                    <Popup>
                        🤩 Tienda de Muebles <br />
                        Carr. Tenayuca Chalmita 23, CDMX <br />
                        <a href="https://maps.app.goo.gl/tNzPKhhxUGnHcGqu7" target="_blank" rel="noopener noreferrer">
                            Ver en Google Maps
                        </a>
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
            
   
        </div>
    );
}
