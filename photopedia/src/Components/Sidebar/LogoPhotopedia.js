import React from "react"
import Logo from "../Images/photopedia_logo_transparent.png"

function LogoPhotopedia() {
  return (
    <div className="container_main_content">
      <div className="left_content">
        <a className="logo_photopedia" href="#home">
          <img src={Logo} alt="Photopedia logo" />
        </a>
      </div>
    </div>
  )
}

export default LogoPhotopedia
