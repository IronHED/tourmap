import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MyComponent(props) {
  const { containerStyle, center, clickableIcons } = props;
  return (
    <LoadScript
    googleMapsApiKey="AIzaSyAtD92z61NsiQefbVNQ9qkOKsGHd2bFHKM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        clickableIcons={clickableIcons}
      >
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)