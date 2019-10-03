import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageUpload = props => (
  <div className="menu">
    <div className="magic-circle"></div>
    <div className="menu-wrapper">
      <div className="menu-item">
        <FontAwesomeIcon icon="map-marker" />
      </div>
      <div className="menu-item">
        <FontAwesomeIcon icon="plus" />
      </div>
      <div className="menu-item">
        <FontAwesomeIcon icon="info" />
      </div>
    </div>
  </div>
);

export default ImageUpload;
