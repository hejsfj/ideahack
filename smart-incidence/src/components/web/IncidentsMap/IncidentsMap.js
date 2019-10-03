import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from '../../../axios-data';

class IncidentsMap extends Component {
  state = {
    incidence: null
  };

  render() {
    const loc = this.state.incidence;
  }

  render() {
    return (
      <div>
        <h1>IncidentsMap</h1>
        <p>MAP</p>
        <p>Incidents List</p>

        <Map
          google={this.props.google}
          zoom={14}
          // initialCenter={}
        >
          <Marker
            name={'Current location'}
            position={{ lat: 39.778519, lng: -122.40564 }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD0B3BbdRZhNPDZCLL4xPvq09YfgeWk3VE'
})(IncidentsMap);
