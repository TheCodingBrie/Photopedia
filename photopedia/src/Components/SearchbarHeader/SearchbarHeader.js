import React from "react"
import "./SearchbarHeader.css"
import Search from "../Search"
import LogoPhotopedia from "../LogoPhotopedia"
import ReturnButton from "../ReturnButton"

export default function BoxHeader() {
  return (
    <div className="left_content">
      <LogoPhotopedia className="Ph-Logo" />
      <div className="BC-header">
        <div className="return_button">
          <ReturnButton />
        </div>
        <div className="SH-search">
          <Search />
        </div>
      </div>
    </div>
  )
}
