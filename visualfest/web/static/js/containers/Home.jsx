"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home.jsx';

function mapStateToProps(state) {
  return {
    yellowTitle: 'VEINTE',
    pinkTitle: 'DIECISIETE',
    bodyText: [
      'Visual fest es un evento organizado por la licenciatura en Diseño y Comunicación Visual de la Facultad de Bellas Artes de la Universidad Autónoma de Querétaro. El evento tiene como objetivo compartir experiencias profesionales a partir de Conferencias y Talleres vinculados a las diferentes áreas del Diseño Gráfico. Así mismo, buscamos la vinculación de estudiantes con el área profesional a partir de los vínculos que pueden generarse a partir del evento.',
      'El evento es gratuito, y sin fines de lucro; por lo cual podrá asistir cualquier persona interesada en áreas afines al Diseño Gráfico.',
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
