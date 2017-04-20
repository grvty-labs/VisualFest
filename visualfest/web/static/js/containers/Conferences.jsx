"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Conferences from '../components/Conferences.jsx';

function mapStateToProps(state) {
  return {
    owners: OWNERS_ALL,
    dates: [
      {
        whiteTitle: '27 ABRIL',
        conferences: CONFERENCES_27,
        // [
        //   { image: 'https://goo.gl/vkdnFs', information: "Titulo de la Conferencia", name: 'Nombre del ponente', hour: 'Horario' },
        //   { image: 'https://goo.gl/vkdnFs', information: "Titulo de la Conferencia", name: 'Nombre del ponente', hour: 'Horario' },
        //   { image: 'https://goo.gl/vkdnFs', information: "Titulo de la Conferencia", name: 'Nombre del ponente', hour: 'Horario' },
        //   { image: 'https://goo.gl/vkdnFs', information: "Titulo de la Conferencia", name: 'Nombre del ponente', hour: 'Horario' },
        //   { image: 'https://goo.gl/vkdnFs', information: "Titulo de la Conferencia", name: 'Nombre del ponente', hour: 'Horario' },
        //   { image: 'https://goo.gl/vkdnFs', information: "Titulo de la Conferencia", name: 'Nombre del ponente', hour: 'Horario' },
        // ],
      },
      {
        whiteTitle: '28 ABRIL',
        conferences: CONFERENCES_28,
      },
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Conferences);
