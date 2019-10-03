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
              sizeFactor={1}
            />
          </div>

          <div className={classes.introtext}>
            <h1 className={classes.h1}>Show us what happend!</h1>
            <h2 className={classes.h2}>
              Togehter we can make the city a better and lovelier place.
            </h2>
            <h2>{this.state.result}</h2>

            <div className={classes.divButton}>
              <p>Take a photo, to show us what to do:</p>
              <a href="./QRCodeAdapt" className={classes.button}>
                Upload Image
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddImage;
