import React from "react";
import { geolocated } from "react-geolocated";
import Maps from "./map";
class Demo extends React.Component {
  render() {
    //
    // console.log("lng:", this.props.coords.longitude)
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
        <Maps
          lat={this.props.coords.latitude}
          lng={this.props.coords.longitude}
        />
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Demo);
