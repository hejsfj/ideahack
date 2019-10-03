import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ImageUpload from './components/user/ImageUpload/ImageUpload';
import QRCodeAdapt from './components/user/QRCodeAdapt/QRCodeAdapt';
import QRCodeScanned from './components/user/QRCodeScanned/QRCodeScanned';
import IncidentsMap from './components/web/IncidentsMap/IncidentsMap';
import AddImage from './components/user/AddImage/AddImage';
import Menu from './components/user/Menu/Menu';
import './App.css';

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
  faLightbulb,
  faQrcode,
  faInfoCircle,
  faThumbsUp,
  faThumbsDown,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import QRRead from './components/user/QRRead/QRRead';

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faCamera,
  faLightbulb,
  faCircle,
  faMapMarker,
  faPlus,
  faInfo,
  faInfoCircle,
  faQrcode,
  faUpload,
  faThumbsUp,
  faThumbsDown,
  faMapMarkerAlt
);

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Switch>
          <Route path="/imageupload" component={ImageUpload} />
          <Route path="/qrcodeadapt" component={QRCodeAdapt} />
          <Route path="/qrcodescanned" component={QRCodeScanned} />
          <Route path="/incidentsmap" component={IncidentsMap} />
          <Route path="/qrread" component={QRRead} />
          <Route path="/addimage" component={AddImage} />
        </Switch>

        <Menu></Menu>
      </div>
    );
  }
}

export default App;
