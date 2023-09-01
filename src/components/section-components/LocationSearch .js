import React, { Component } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

class LocationSearch extends Component {
  constructor(props) {
    super(props);
    this.searchBox = null;
    this.autocomplete = null;
    this.options = {
      componentRestrictions: { country: ["in", "au", "ca", "nz"] },
      fields: ["address_components", "geometry", "icon", "name"],
      types: ["establishment"],
    };
  }

  onLoad = (ref) => {
    this.searchBox = ref;

    // Create the Autocomplete instance
    this.autocomplete = new window.google.maps.places.Autocomplete(this.searchBox, this.options);

    // Listen for place changes
    this.autocomplete.addListener('place_changed', this.onPlaceChanged);
  };

  onPlaceChanged = () => {
    const place = this.autocomplete.getPlace();

    // Check if a place is selected and it has a formatted address
    if (place && place.formatted_address) {
      const selectedValue = place.formatted_address;
      console.log(selectedValue); // Log the selected value to the console
      // You can also update the component's state or perform any other action with the selected value
    }
  };

  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyDlolRY4fL-gl6c_cNIeOM7DC7D">
        <GoogleMap
          mapContainerStyle={{ height: '400px', width: '100%' }}
          center={{ lat: -34.397, lng: 150.644 }}
          zoom={8}
          onLoad={(map) => {
            this.map = map;
          }}
        >
          <StandaloneSearchBox onLoad={this.onLoad} onPlacesChanged={this.onPlaceChanged}>
            <input type="text" placeholder="Search for a location" />
          </StandaloneSearchBox>
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default LocationSearch;
