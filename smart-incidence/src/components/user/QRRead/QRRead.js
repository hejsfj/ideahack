import React, { Component } from 'react';
import classes from './QRRead.module.css';
import QrReader from 'react-qr-reader';
import axios from '../../../axios-data';

class QRRead extends Component {
  state = {
    incidence: null
  };

  handleScan = data => {
    if (data) {
      this.setState({
        incidence: data
      });
      console.log(data)
    }
  };
  handleError = err => {
    console.error(err);
  };

  takePhotoHandler = () => {
    const incidences = JSON.parse(this.state.incidence)
    axios.post('/incidence.json', incidences)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className={classes.QRstyle}>
        <div>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
            showViewFinder={true}
          />
          <div className={classes.introtext}>
            <h1 className={classes.h1}>Scan the QR-Code!</h1>
            <h2 className={classes.h2}>
              By scanning, we will be alerted and ensure one of our servicve
              providers will fix the situation as quick as possible.
            </h2>
            <h2>{this.state.incidence}</h2>
            <div className={classes.divButton}>
              <p>No QR-Code? But still a mess? Take a Photo:</p>
              <a href="./addImage"><button className={classes.button} onClick={this.takePhotoHandler}>
                Add an Image
            </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QRRead;
