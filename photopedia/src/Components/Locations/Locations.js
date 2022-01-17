import React from "react";
import "./Locations.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Locations() {
  return (
    <div className="locations">
      <div className="locations-container">
        <MapContainer
          center={[51.1657, 10.4515]}
          zoom={6}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
