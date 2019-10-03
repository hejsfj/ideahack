import React from 'react';
import classes from './QRCodeAdapt.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QRCodeAdapt = props => (
  <div>
    <div className={classes.introtext}>
      <h1 className={classes.h1}>Your incident has been submitted!</h1>
      <a href="./QRCodeAdapt" className={classes.button}>
        <FontAwesomeIcon icon="lightbulb" size="1x" />
        <span>&nbsp;</span>We think it is a full trash can
      </a>
      <h2 className={classes.h2}>Are we right?</h2>
    </div>

    <div className={classes.container}>
      <a href="./IncidentsMap">
        <div className={classes.circleCam}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon="thumbs-down" size="2x" />
          </div>
        </div>
      </a>
      <a href="./IncidentsMap">
        <div className={classes.circleQRCode}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon="thumbs-up" size="4x" />
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default QRCodeAdapt;
