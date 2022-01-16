import React from "react";
import "./App.css";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import LogoPhotopedia from "./Components/LogoPhotopedia";

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
    </div>
  );
}

export default App;
