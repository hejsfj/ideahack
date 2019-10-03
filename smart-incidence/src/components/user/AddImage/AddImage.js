import React, { Component } from 'react';
import classes from './AddImage.module.css';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class AddImage extends Component {
  state = {
    result: ''
  };

  onTakePhoto(dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };
  handleError = err => {
    console.error(err);
  };

  render() {
    return (
      <div className={classes.QRstyle}>
        <div>
          <div className="App">
            <Camera
              onTakePhoto={dataUri => {
                this.onTakePhoto(dataUri);
              }}
              isFullscreen={true}
              sizeFactor={1}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddImage;
