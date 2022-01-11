import React from "react"
import "./App.css"
// import CardsHome from "./CardsHome";
// import SearchBar from "./SearchBar";
// import './Home.css';
//import LandingPage from "./Components/LandingPage/LandingPage"
import Home from "./Home"
import BoxComponent from "./BoxComponent"
import SocialMedia from "./components/SocialMedia/SocialMedia"
import Sidebar from "./components/Sidebar/Sidebar"
import PhotoGallery from "./PhotoGallery"

function App() {
  return (
    <div className="App">
      <div className="search_and_cards"></div>
      <Home />
      <Sidebar />
      <BoxComponent />
      <SocialMedia />

      {/* take away PHOTOGALERY from here when the router is ready */}
      <PhotoGallery />
    </div>
  )
}

export default App

/*

<LandingPage />
*/
