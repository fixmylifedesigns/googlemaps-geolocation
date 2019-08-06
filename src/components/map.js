import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";
import reactlogo from '../logo.svg'
import ReactLogo from './reactlogo.png'

function Map(props) {
  return (
    <div>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        defaultOptions={{ styles: mapStyles }}
      />
      <Marker
        key="location"
        position={{
          lat: props.lat,
          lng: props.lng
        }}
        icon={{
          url:ReactLogo,
          scaledSize: new window.google.maps.Size(45, 60),
        }}
      />
    </div>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function TestMap(props) {
  return (
    <div style={{ overflow: "hidden", width: "95vw", height: "95vh", margin:'auto', borderRadius:"30px"  }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        lat={props.lat}
        lng={props.lng}
      />
    </div>
  );
}
