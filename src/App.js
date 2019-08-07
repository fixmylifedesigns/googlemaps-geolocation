import React from "react";
import "./App.css";
import Geolocated from "./components/geolocation";
import MenuButton from "./components/material-ui/menu";
// import lightmode from './components/mapstyles/lightMode'
// import darkmode from './components/mapstyles/darkMode'

function App() {
  return (
    <div className="App">
      <Geolocated /> <MenuButton />
    </div>
  );
}

export default App;
