import React, { Component } from 'react';
import classes from './QRCodeScanned.module.css';
import axios from '../../../axios-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class QRCodeScanned extends Component {
    state = {
        id: 35792,
        tag: 'trashcan',
        filled: true,
        location: {
            lat: 50.400204,
            lon: 7.613670
        }
    }

    takePhotoHandler = () => {
        const incidences = {
            incidence: this.state
        }

        axios.post('/incidence.json', incidences)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className={classes.introtext}>
                <h1>Thanks for scanning!</h1>
                <h2>Vallendar</h2>
                <h3>We love your effort to make this city a better place! Pleace upload an image of</h3>
                <div className={classes.circleUpload}>
                    <div className={classes.icon}>
                        <FontAwesomeIcon icon="upload" size="2x" />
                    </div>
                </div>
                <div onClick={this.takePhotoHandler} className={classes.circleCam}>
                    <div className={classes.icon}>
                        <FontAwesomeIcon icon="camera" size="4x" />
                    </div>
                </div>
            </div>
        )
    }
    //<button onClick={this.takePhotoHandler}>Take a photo</button> (aus dem html)

};

export default QRCodeScanned;