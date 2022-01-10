import React from "react"
import "./App.css"
// import CardsHome from "./CardsHome";
// import SearchBar from "./SearchBar";
// import './Home.css';
//import LandingPage from "./Components/LandingPage/LandingPage"
import Home from "./Home"
import BoxComponent from "./BoxComponent"
import SocialMedia from "./Components/SocialMedia/SocialMedia"
import Sidebar from "./Components/Sidebar/Sidebar"

function App() {
  return (
    <div className="App">
      <div className="search_and_cards"></div>
      <Home />
      <Sidebar />
      <BoxComponent />
      <SocialMedia />
    </div>
  )
}

export default App

/*

<LandingPage />
*/
