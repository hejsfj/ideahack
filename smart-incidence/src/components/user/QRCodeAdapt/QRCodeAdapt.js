import React from 'react';
import classes from './QRCodeAdapt.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QRCodeAdapt = props => (
  <div className={classes.warpper}>
    <div className="magic-circle"></div>
    <div className={classes.introtext}></div>
    <h1>CHECK</h1>
    <h2 className={classes.h2}>
      Your incident has been submitted. We think it is a defect bulb, could this
      be correct?
    </h2>

    <div className={classes.yes}>
      <div className={classes.icon}>YES</div>
    </div>
    <div className={classes.no}>
      <div className={classes.icon}>No</div>
    </div>
  </div>
);

export default QRCodeAdapt;
