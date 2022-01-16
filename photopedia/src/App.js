import React from "react";
import "./App.css";
// import CardsHome from "./CardsHome";
// import SearchBar from "./SearchBar";
// import './Home.css';
import LandingPage from "./Components/LandingPage/LandingPage";
// import Home from "./Home"
import BoxComponent from "./BoxComponent";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import Sidebar from "./Components/Sidebar/Sidebar";
import PhotoGallery from "./PhotoGallery";
import GalleryWithDescription from "./Components/GalleryWithDescription";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="search_and_cards"></div>
      {/* <Home /> */}
      <Sidebar />
      <Outlet />
      <SocialMedia />
      {/* take away PHOTOGALERY from here when the router is ready */}
    </div>
  );
}

export default App;

/*

<LandingPage />
*/
