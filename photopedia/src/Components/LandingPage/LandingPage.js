import React from "react"
import "./LandingPage.css"

export default function LandingPage() {
  return (
    <section className="LandingPage">
      <a href="/">
        <img
          className="LandingImage"
          src={
            "https://live.staticflickr.com/65535/51801718599_164c64ceb7_n.jpg"
          }
          alt="Landing"
        />
      </a>
    </section>
  )
}
