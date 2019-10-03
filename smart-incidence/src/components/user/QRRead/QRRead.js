import React, { Component } from 'react';
import classes from './QRRead.module.css';
import QrReader from 'react-qr-reader';

class QRRead extends Component {
  state = {
    result: ''
  };

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
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
            showViewFinder={false}
          />
          <div className={classes.introtext}>
            <h1 className={classes.h1}>Scan the QR-Code!</h1>
            <h2 className={classes.h2}>
              By scanning we will be alerted and ensure one of our servicve
              providers will fix the situation as quick as possible
            </h2>
            <h2>{this.state.result}</h2>

            <a href="" className={classes.button}>
              Add an Image
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default QRRead;
