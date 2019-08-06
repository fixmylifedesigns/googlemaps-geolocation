import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Geolocated from './components/geolocation'
function App() {
  return (
    <div className="App">
      <Geolocated/>
    </div>
  );
}

export default App;
