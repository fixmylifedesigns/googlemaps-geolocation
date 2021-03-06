import React from "react";
import { geolocated } from "react-geolocated";
import Maps from "./map";
// import Maps from './map copy'

class Demo extends React.Component {

  render() {
    // console.log("lng:", this.props.coords.longitude)
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div
        style={{ background: "white", borderRadius: "20px", padding: "30px" }}
      >
        Geolocation is not enabled
      </div>
    ) : this.props.coords ? (
      <div>
        
        <Maps
          lat={this.props.coords.latitude}
          lng={this.props.coords.longitude}
          mapMode={this.props.mapMode}
          handleMapMode={this.props.handleMapMode}
        />
      </div>
    ) : (
      <div
        style={{ background: "white", borderRadius: "20px", padding: "30px" }}
      >
        Getting the location data&hellip;{" "}
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Demo);
