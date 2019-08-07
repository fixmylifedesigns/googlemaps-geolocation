import React from "react";
import "./App.css";
import Geolocated from "./components/geolocation";
import MenuButton from "./components/material-ui/menu";
// import lightmode from "./components/mapstyles/lightMode";
// import darkmode from "./components/mapstyles/darkMode";

function App() {
  // const [mapMode, setMapMode] = React.useState(lightmode);

  // const handleMapMode = () => {
  //   if (mapMode === lightmode) {
  //     setMapMode(darkmode);
  //   }
  //   if (mapMode === darkmode) {
  //     setMapMode(lightmode);
  //   }
  // };

  return (
    <div className="App">
      {console.log}

      <Geolocated  />
      <MenuButton/>
    </div>
  );
}

export default App;
