import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
import ReactLogo from "./reactlogo.png";
import lightmode from "./mapstyles/lightMode";
import darkmode from "./mapstyles/darkMode";
// import MenuButton from './material-ui/menu'

function Map(props) {
// const [map, setMap] = React.useState(props.mapMode)
const mapMode = () => {
  if (localStorage.getItem("mapmode") === "darkmode"){
    return darkmode
  } if (localStorage.getItem("mapmode") === "lightmode") {
    return lightmode
  } else {
    return lightmode
  }
}


  return (
    <div>

      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        defaultOptions={{ styles: mapMode() }}
      />
      <Marker
        key="location"
        position={{
          lat: props.lat,
          lng: props.lng
        }}
        icon={{
          url: ReactLogo,
          scaledSize: new window.google.maps.Size(45, 60)
        }}
      />
    </div>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function TestMap(props) {

  return (
    <div
      style={{
        overflow: "hidden",
        width: "95vw",
        height: "95vh",
        margin: "auto",
        borderRadius: "30px"
      }}
    >
      {console.log(props.mapMode)}
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        lat={props.lat}
        lng={props.lng}
        mapMode={props.mapMode}
      />
    </div>
  );
}
