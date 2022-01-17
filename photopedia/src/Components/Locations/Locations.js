import { useState, useEffect } from "react";
import React from "react";
import "./Locations.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const fetchURL = "https://photopedia-server.herokuapp.com/api/locations";

export default function Locations() {
  const [locations, setLocations] = useState([]);

  console.log(locations);
  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = () => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="locations">
      <div className="locations-container">
        <MapContainer
          center={[51.1657, 10.4515]}
          zoom={5.5}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((location) => (
            <Marker position={[location.lattitude, location.longitude]}>
              <Popup>
                <b>{location.name}</b> is a great place to take{" "}
                <b>{location.type}</b> photos
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
