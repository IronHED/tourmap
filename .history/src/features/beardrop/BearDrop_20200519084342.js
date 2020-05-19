import React from 'react'
import { GoogleMap,useLoadScript,Marker,InfoWindow} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

import usePlaceAutocomplete, { geocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption,}

const BearDrop = () => {
    return (
        <div>
            map
        </div>
    )
}

export default BearDrop
