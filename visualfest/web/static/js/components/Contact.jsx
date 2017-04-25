'use strict';
import React from 'react';
import Component from './custom/ScrollOnMountComponent.jsx';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.mapFrame = this.mapFrame.bind(this);
  }

  mapFrame () {
    return null;
  }

  render () {
    return (
      <div className='contact'>
        <div className='map'>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.0558500809534!2d-100.38853874948377!3d20.58577668617243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d344d3acf867bd%3A0x76f4f9ea42a59fa8!2sCentro+Educativo+Cultural+del+Estado+de+Quer%C3%A9taro!5e0!3m2!1ses-419!2smx!4v1492797595899'
            frameBorder='0'
            allowFullScreen={ false } />
        </div>
        <div className='details'>
          <h3>Contacto</h3>
          <p>Centro Educativo Cultural del Estado de Querétaro. Av. Constituyentes S/N, Villas del Sur, 76000 Santiago de Querétaro, QRO.</p>
          <div className='line'></div>
          <p>Edificio A. Planta Alta</p>
          <div className='line'></div>
          <p>contacto@visualfest.mx</p>
        </div>
      </div>
    );
  }
}
