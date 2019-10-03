import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from '../../../axios-data';

class IncidentsMap extends Component {
  state = {
    incidence: null
  }
  componentDidMount(){
    axios.get('https://smart-incidence.firebaseio.com/incidence.json')
      .then(response => {
        this.setState({incidence: response.data})
        console.log(response.data.incidence)
      });
      console.log(Object.keys(this.state))
  }

  render() {
    console.log(Object.keys(this.state))
    const loc = this.state.incidence
    return (
      <div>
        <h1>IncidentsMap</h1>
        <p>MAP</p>
        <p>Incidents List</p>

        <Map google={this.props.google} zoom={14} 
        // initialCenter={}
        >
          <Marker name={'Current location'} position={loc} />
          <Marker name={'Current location'} position={{ lat: 39.778519, lng: -122.405640 }} />
        </Map>
      </div>
    )
  }
};

export default GoogleApiWrapper({ apiKey: ('AIzaSyD0B3BbdRZhNPDZCLL4xPvq09YfgeWk3VE') })(IncidentsMap);