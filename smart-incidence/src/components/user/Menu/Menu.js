import React from 'react';
import classes from './Menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageUpload = props => (
  <div className="classes.menu">
    <div class="menu-item">A</div>
    <div class="menu-item">B</div>
    <div class="menu-item">
      C<FontAwesomeIcon icon="check-square" />
      Favorite beverage: <FontAwesomeIcon icon="coffee" />
    </div>
  </div>
);

export default ImageUpload;
