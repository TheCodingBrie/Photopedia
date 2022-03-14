import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../images/photopedia_logo_transparent.png";

function LogoPhotopedia() {
  return (
    <div className="container_main_content">
      <div className="left_content">
        <div className="logo_photopedia">
          <NavLink to="/photopedia">
            <img src={Logo} alt="Photopedia logo" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LogoPhotopedia;
