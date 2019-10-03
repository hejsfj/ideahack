import React from 'react';
import classes from './QRCodeAdapt.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QRCodeAdapt = (props) => (
    <div>
        <h1 className={classes.h1}>QRCodeAdapt</h1>
        <h3 className={classes.h3}>Your incident has been submitted. We think your trashcan is full. Is this correct?</h3>
        <div className={classes.circleDown}>
            <div className={classes.icon}>
                <FontAwesomeIcon icon="thumbs-down" size="2x" />
            </div>
        </div>
        <div className={classes.circleUp}>
            <div className={classes.icon}>
                <FontAwesomeIcon icon="thumbs-up" size="2x" />
            </div>
        </div>
    </div>
);

export default QRCodeAdapt;