import React from 'react'
import { GoogleMap,useLoadScript,Marker,InfoWindow} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

import usePlaceAutocomplete, { geocode, getLatLng } from "use-places-autocomplete";
import { ComboBox, ComboBoxInput, }

const BearDrop = () => {
    return (
        <div>
            map
        </div>
    )
}

export default BearDrop
