import React, { Component } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

class Tourma extends Component {
  containerStyle = {
    width: '400px',
    height: '400px'
  };

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
export default Tourma