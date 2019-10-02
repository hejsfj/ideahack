import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ImageUpload from './components/user/ImageUpload/ImageUpload';
import QRCodeAdapt from './components/user/QRCodeAdapt/QRCodeAdapt';
import QRCodeScanned from './components/user/QRCodeScanned/QRCodeScanned';
import IncidentsMap from './components/web/IncidentsMap/IncidentsMap';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/imageupload" component={ImageUpload} />
        <Route path="/qrcodeadapt" component={QRCodeAdapt}/>
        <Route path="/qrcodescanned" component={QRCodeScanned}/>
        <Route path="/incidentsmap" component={IncidentsMap}/>
      </Switch>
      <h1>Hi</h1>
    </div>
  );
}

export default App;
