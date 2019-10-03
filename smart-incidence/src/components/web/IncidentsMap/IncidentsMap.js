import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from '../../../axios-data';

class IncidentsMap extends Component {
  state = {
    incidence: {
      filled: '',
      id: '',
      location: {
        lat: '',
        lon: ''
      },
      tag: ''
    }
  };
  componentDidMount() {
    const { posts } = this.state;
    axios
      .get('https://smart-incidence.firebaseio.com/incidence.json')
      .then(response => {
        const data = Object.values(response.data);
        this.setState({ incidence: data });
        console.log(this.state.incidence);
      });
  }

  render() {
    let posts = <p>No posts yet</p>;

    return (
      <div>
        {this.state.incidence.id}
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
