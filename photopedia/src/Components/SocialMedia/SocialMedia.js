import React from "react";
import "./SocialMedia.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <section id="contact" className="SocialMedia">
      <div className="SM-wrapper">
        <h4>Follow:</h4>
        <div className="SM-container">
          <a href="https://www.facebook.com/">
            <FaFacebookF />
          </a>

          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>

          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
