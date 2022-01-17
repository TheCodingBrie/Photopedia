import React from "react";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="LandingPage">
      <NavLink to="/photopedia/home">
        <img
          className="LandingImage"
          src={
            "https://live.staticflickr.com/65535/51801718599_164c64ceb7_n.jpg"
          }
          alt="Landing"
        />
      </NavLink>
    </section>
  );
}
