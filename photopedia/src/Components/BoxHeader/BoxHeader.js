import React from "react";
import "./BoxHeader.css";
import HeaderAnimation from "../HeaderAnimation";

export default function BoxHeader() {
  return (
    <div className="left_content">
      <div className="BC-header">
        <div className="animation">
          <HeaderAnimation />
        </div>
      </div>
    </div>
  );
}
