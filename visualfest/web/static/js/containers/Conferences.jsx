"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Conferences from '../components/Conferences.jsx';

function mapStateToProps(state) {
  return {
    whiteTitle: '26 ABRIL',
    conferences: [
    { image: 'https://goo.gl/vkdnFs', information: "Titulo de la Conferencia", name: 'Nombre del ponente', hour: 'Horario' },
    { image: 'https://goo.gl/vkdnFs', information: "Titulo de la Conferencia", name: 'Nombre del ponente', hour: 'Horario' },
    { image: 'https://goo.gl/vkdnFs', information: "Titulo de la Conferencia", name: 'Nombre del ponente', hour: 'Horario' },
    { image: 'https://goo.gl/vkdnFs', information: "Titulo de la Conferencia", name: 'Nombre del ponente', hour: 'Horario' },
    { image: 'https://goo.gl/vkdnFs', information: "Titulo de la Conferencia", name: 'Nombre del ponente', hour: 'Horario' },
    { image: 'https://goo.gl/vkdnFs', information: "Titulo de la Conferencia", name: 'Nombre del ponente', hour: 'Horario' },
  ],
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Conferences);
