import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageUpload = props => (
  <div className="Menu">
    <div className="Menu-item">A</div>
    <div className="Menu-item">B</div>
    <div className="Menu-item">
      C<FontAwesomeIcon icon="check-square" />
      Favorite beverage: <FontAwesomeIcon icon="coffee" />
    </div>
  </div>
);

export default ImageUpload;
