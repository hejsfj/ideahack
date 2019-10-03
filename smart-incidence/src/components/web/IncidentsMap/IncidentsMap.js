import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from '../../../axios-data';
import classes from './IncidentsMap.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
  width: '100%',
  height: '30vh',
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
            key={id}
            position={this.state.incidence[id].location}
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

        <div className={classes.POI}>
          <div className={classes.imp}>
            <img src={require('./brokenLamp.jpg')} alt="lampe" />
          </div>
          <div className={classes.POIText}>
            <div className={classes.icon}>
              <FontAwesomeIcon icon="map-marker-alt" size="2x" />
            </div>
            <h1>Vallendar Stadthalle</h1>
            <h2>Eingangslampe defekt</h2>
            <h3>Reportet 2 times.</h3>
          </div>
        </div>

        <div className={classes.POI}>
          <div className={classes.imp}>
            <img src={require('./fullBin.jpg')} alt="meull" />
          </div>
          <div className={classes.POIText}>
            <div className={classes.icon}>
              <FontAwesomeIcon icon="map-marker-alt" size="2x" />
            </div>
            <h1>Vallendar Park</h1>
            <h2>Mülleimer überfüllt</h2>
            <h3>Reportet 4 times.</h3>
          </div>
        </div>

        <br/><br/><br/><br/>
        
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD0B3BbdRZhNPDZCLL4xPvq09YfgeWk3VE'
})(IncidentsMap);
