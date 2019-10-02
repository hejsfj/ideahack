import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ImageUpload from './components/user/ImageUpload/ImageUpload';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/imageupload" component={ImageUpload} />
        <Route path="/" />
      </Switch>
    </div>
  );
}

export default App;
