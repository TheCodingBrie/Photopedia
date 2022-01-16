import React from "react"
import "./App.css"
// import CardsHome from "./CardsHome";
// import SearchBar from "./SearchBar";
// import './Home.css';
//import LandingPage from "./Components/LandingPage/LandingPage"
// import Home from "./Home"
//import BoxComponent from "./BoxComponent"
import SocialMedia from "./Components/SocialMedia/SocialMedia"
//import Sidebar from "./Components/Sidebar/Sidebar"
//import PhotoGallery from "./PhotoGallery"
//import GalleryWithDescription from "./Components/GalleryWithDescription"
//import Contact from "./Components/Contact/Contact"
import GallerySecond from "./Components/GallerySecond"

function App() {
  return (
    <div className="App">
      <div className="search_and_cards"></div>

      {/* <Home /> */}
      <GallerySecond />

      <SocialMedia />

      {/* take away PHOTOGALERY from here when the router is ready */}
    </div>
  )
}

export default App

/*
<LandingPage />
<Sidebar />
<BoxComponent />
<Contact />
<GalleryWithDescription />

<PhotoGallery />
*/
