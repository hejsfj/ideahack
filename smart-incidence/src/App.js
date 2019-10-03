import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ImageUpload from './components/user/ImageUpload/ImageUpload';
import QRCodeAdapt from './components/user/QRCodeAdapt/QRCodeAdapt';
import QRCodeScanned from './components/user/QRCodeScanned/QRCodeScanned';
import IncidentsMap from './components/web/IncidentsMap/IncidentsMap';
import Menu from './components/user/Menu/Menu';
import './App.css';
import axios from './axios-data';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import {
  faCheckSquare,
  faCoffee,
  faCamera,
  faCircle,
  faMapMarker,
  faPlus,
  faUpload,
  faInfo,
  faQrcode,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faCamera,
  faCircle,
  faMapMarker,
  faPlus,
  faInfo,
  faInfoCircle,
  faQrcode,
  faUpload
);

class App extends Component {
  state = {
    incidence: null
  }
  componentDidMount(){
    axios.get('https://smart-incidence.firebaseio.com/incidence.json')
      .then(response => {
        this.setState({incidence: response.data})
        // console.log(response.data)
      });

  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/imageupload" component={ImageUpload} />
          <Route path="/qrcodeadapt" component={QRCodeAdapt} />
          <Route path="/qrcodescanned" component={QRCodeScanned} incidence={this.state.incidence}/>
          <Route path="/incidentsmap" component={IncidentsMap} incidence={this.state.incidence}/>
        </Switch>

        <Menu></Menu>
      </div>
    );
  }
}

export default App;
