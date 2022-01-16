import React from "react";
import Logo from "../Images/photopedia_logo_transparent.png";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function LogoPhotopedia() {
  return (
    <div className="container_main_content">
      <div className="left_content">
        <NavLink className="logo_photopedia" to="/photopedia">
          <img src={Logo} alt="Photopedia logo" />
        </NavLink>
      </div>
    </div>
  );
}

export default LogoPhotopedia;
