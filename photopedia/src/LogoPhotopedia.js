import React from "react";
import Logo from "./images/photopedia_logo_transparent.png";

function LogoPhotopedia() {
    return (
    <div className="container_main_content">
            <div className="left_content">
        <div className="logo_photopedia">
          <img src={Logo} alt="Photopedia logo" />
        </div>
      </div>
    </div>
    );
}

export default LogoPhotopedia;