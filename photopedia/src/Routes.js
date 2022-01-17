import React from "react";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import BoxComponent from "./BoxComponent";
import GalleryWithDescription from "./components/GalleryWithDescription";
import Contact from "./components/Contact/Contact";
import Locations from "./components/Locations/Locations";

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
