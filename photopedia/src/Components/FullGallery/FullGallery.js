import React from "react";
import { useState, useEffect } from "react";
import "./FullGallery.css";

const fetchURL = "https://photopedia-server.herokuapp.com/api/photos";

export default function FullGallery() {
  const [photos, setPhotos] = useState([]);

  console.log(photos);
  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = () => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="full-gallery-container">
      {photos.map((photo) => (
        <a target="_blank" href={photo.url}>
          <div className="image-box">
            <img
              width="200px"
              height="200px"
              src={photo.url}
              alt={photo.title}
            ></img>
          </div>
        </a>
      ))}
    </div>
  );
}
