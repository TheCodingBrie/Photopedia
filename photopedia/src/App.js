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
      <Outlet />
      <SocialMedia />
    </div>
  );
}

export default App;
