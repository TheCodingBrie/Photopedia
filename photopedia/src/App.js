import React from "react";
import "./App.css";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import LogoPhotopedia from "./components/LogoPhotopedia";
// take away this line when the router is done
// import GalleryWithDescription from './components/GalleryWithDescription';
// import Gallery from './components/Gallery';
import Locations from './components/Locations';

function App() {
  return (
    <div className="App">
      <LogoPhotopedia className="Ph-Logo" />
      <Sidebar />
      <div className="full-container">
        <div className="menu-space"></div>
        <div className="content-space">
          <Outlet />
        </div>
        <SocialMedia />
      </div>

      {/* take away these lines when the router is done */}
      {/* <GalleryWithDescription /> 
      <Gallery /> */}
      {/* <Locations /> */}
    </div>

    
  );
}

export default App;
