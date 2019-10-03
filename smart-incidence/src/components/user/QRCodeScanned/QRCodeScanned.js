import React, { Component } from 'react';
import axios from '../../../axios-data';

class QRCodeScanned extends Component {
    state = {
        id: 35791,
        tag: 'trashcan',
        filled: false,
        location: {
            lat: 50.398292,
            lon: 7.613024
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
            <div>
                <h1>QRCodeScanned</h1>
                <p>We love your effort to make ...</p>
                <button onClick={this.takePhotoHandler}>Take a photo</button>
            </div>
        )
    }
};

export default QRCodeScanned;