import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from '../../../axios-data';
import classes from './IncidentsMap.module.css';

const style = {
  width: '100%',
  height: '30%'
};

class IncidentsMap extends Component {
  state = {
    incidence: null
  };

  componentDidMount() {
    axios
      .get('https://smart-incidence.firebaseio.com/incidence.json')
      .then(response => {
        const data = Object.values(response.data);
        this.setState({ incidence: data });
      });
  }

  render() {
    let posts = <p>No posts yet</p>;
    let mark = null;

    if (this.state.incidence) {
      mark = Object.values(this.state.incidence).map((obj, id) => {
        return (
          <Marker
            key={this.state.incidence[id].incidence.id}
            position={this.state.incidence[id].incidence.location}
          />
        );
      });
    }

    return (
      <div>
        {/* {this.state.incidence.id} */}
        <div className={classes.map}>
          <Map
            style={style}
            google={this.props.google}
            zoom={14}
            initialCenter={{ lat: 50.398292, lng: 7.613024 }}
          >
            {mark}
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD0B3BbdRZhNPDZCLL4xPvq09YfgeWk3VE'
})(IncidentsMap);
