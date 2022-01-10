import React from "react";
import "./App.css";
// // import CardsHome from "./CardsHome";
// import SearchBar from "./SearchBar";
// // import './Home.css';
import Home from './Home';
import BoxComponent from './BoxComponent';
import Gallery from "./components/Gallery";





function App() {
  return (
    <div className="App">
      <div className="search_and_cards">
        
        
      </div>
      <Home />
      <BoxComponent />

    {/* waiting for the router - erase here when it´s done */}
    <div className="photo_gallery">
      <Gallery />
    </div>

    </div>

    
      
      
  
  );
}

export default App;
