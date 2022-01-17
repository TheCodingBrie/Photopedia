import React from "react";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import BoxComponent from "./BoxComponent";
import GalleryWithDescription from "./Components/GalleryWithDescription";
import Contact from "./Components/Contact/Contact";
import Locations from "./Components/Locations/Locations";

export default function photopediaRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="photopedia" element={<App />}>
        <Route path="home" element={<BoxComponent />}>
          <Route
            path="description"
            element={<GalleryWithDescription />}
          ></Route>
        </Route>
        <Route path="locations" element={<Locations />}></Route>
        {/* <Route path="about" element={}></Route>
        <Route path="newphoto" element={}></Route>
        <Route path="newlocation" element={}></Route>*/}
        <Route path="contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  );
}
