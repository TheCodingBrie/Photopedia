import React from "react";
import "./App.css";
// import CardsHome from "./CardsHome";
// import SearchBar from "./SearchBar";
import './Home.css';
import LandingPage from "./components/LandingPage/LandingPage"
import Home from "./Home"
import BoxComponent from "./BoxComponent";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Sidebar from "./components/Sidebar/Sidebar";
import PhotoGallery from "./PhotoGallery";
import GalleryWithDescription from './components/GalleryWithDescription';

function App() {
  return (
    <div className="App">
      <div className="search_and_cards"></div>
      <LandingPage />
      <Home /> 
      <Sidebar />
      <BoxComponent /> 
      <SocialMedia />

      {/* take away PHOTOGALERY from here when the router is ready */}
      <PhotoGallery /> 
      
      <GalleryWithDescription />
    </div>
  )
}

export default App

/*

<LandingPage />
*/
