import React from "react";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import BoxComponent from "./BoxComponent";
import SocialMedia from "./Components/SocialMedia/SocialMedia";

export default function photopediaRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/photopedia" element={<App />}>
        <Route path="" element={<BoxComponent />}></Route>
        <Route path="" element={<BoxComponent />}></Route>
      </Route>
    </Routes>
  );
}
