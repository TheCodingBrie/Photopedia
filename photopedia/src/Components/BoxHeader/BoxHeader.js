import React from "react"
import "./BoxHeader.css"
import Search from "../Search"
import HeaderAnimation from "../HeaderAnimation"
import LogoPhotopedia from "../LogoPhotopedia"

export default function BoxHeader() {
  return (
    <div className="left_content">
      <LogoPhotopedia className="Ph-Logo" />
      <div className="BC-header">
        <div className="animation">
          <HeaderAnimation />
        </div>
        <div className="search">
          <Search />
        </div>
      </div>
    </div>
  )
}
