import React, { Component } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

export default class Tourmap extends Component {
  containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  //DEFAULT_LAT=43.9706
  //DEFAULT_LNG= -79.2443
  
  center = {
    lat: 43.9706,
    lng: -79.2443
  };

  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAtD92z61NsiQefbVNQ9qkOKsGHd2bFHKM"
      >
        <GoogleMap
          mapContainerStyle={this.containerStyle}
          center={this.center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
        </GoogleMap>
      </LoadScript>
    )
  }
}