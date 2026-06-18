import {useRef} from "react";
import {Autocomplete} from "@react-google-maps/api";

const PlacesInput = ({value, onChange, placeholder, onPlaceSelect}) => {
  const autocompleteRef = useRef(null);

  const handlePlaceChanged = () => {
    if (!autocompleteRef.current) return;

    const place = autocompleteRef.current.getPlace();

    if (!place) return;

    const address = place.formatted_address || place.name || "";

    onChange(address);

    const selectedPlace = {
      address,
      placeId: place.place_id,
      lat: place.geometry?.location?.lat(),
      lng: place.geometry?.location?.lng(),
      name: place.name,
    };

    // console.log("Selected place:", selectedPlace);

    if (onPlaceSelect) {
      onPlaceSelect(selectedPlace);
    }
  };

  return (
    <Autocomplete
      onLoad={(autocomplete) => {
        autocompleteRef.current = autocomplete;
      }}
      onPlaceChanged={handlePlaceChanged}
      options={{
        componentRestrictions: {country: "au"},
        fields: ["place_id", "geometry", "formatted_address", "name"],
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Enter address"}
        required
        className="input-class"
      />
    </Autocomplete>
  );
};

export default PlacesInput;
