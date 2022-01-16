import React from "react"
import "./App.css"
// import CardsHome from "./CardsHome";
// import SearchBar from "./SearchBar";
// import './Home.css';
<<<<<<< HEAD
//import LandingPage from "./Components/LandingPage/LandingPage"
// import Home from "./Home"
//import BoxComponent from "./BoxComponent"
import SocialMedia from "./Components/SocialMedia/SocialMedia"
//import Sidebar from "./Components/Sidebar/Sidebar"
//import PhotoGallery from "./PhotoGallery"
//import GalleryWithDescription from "./Components/GalleryWithDescription"
//import Contact from "./Components/Contact/Contact"
import GallerySecond from "./Components/GallerySecond"
=======
import LandingPage from "./Components/LandingPage/LandingPage";
// import Home from "./Home"
import BoxComponent from "./BoxComponent";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import Sidebar from "./Components/Sidebar/Sidebar";
import PhotoGallery from "./PhotoGallery";
import GalleryWithDescription from "./Components/GalleryWithDescription";
import { Outlet } from "react-router-dom";
>>>>>>> router/leaflet

function App() {
  return (
    <div className="App">
      <div className="search_and_cards"></div>
<<<<<<< HEAD

      {/* <Home /> */}
      <GallerySecond />

=======
      {/* <Home /> */}
      <Sidebar />
      <Outlet />
>>>>>>> router/leaflet
      <SocialMedia />
      {/* take away PHOTOGALERY from here when the router is ready */}
    </div>
  );
}

export default App;

/*
<LandingPage />
<Sidebar />
<BoxComponent />
<Contact />
<GalleryWithDescription />

<PhotoGallery />
*/
