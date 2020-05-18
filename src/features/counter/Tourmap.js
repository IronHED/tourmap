
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export const Tourmap = (props) => {
    const { containerStyle, center } = props;
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAtD92z61NsiQefbVNQ9qkOKsGHd2bFHKM"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
        </GoogleMap>
      </LoadScript>
    )
}
export default React.memo(Tourmap)
