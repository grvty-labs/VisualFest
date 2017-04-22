"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { changeLocation } from '../actions/location';
import Topbar from '../components/Topbar.jsx';

function mapStateToProps(state) {
  return {
    burguer_icon: '/images/hamburguesa.svg',
    home_display: '/images/logo.svg',
    goToDisplays: [
      'CONFERENCIAS',
      'TALLERES',
      'PATROCINADORES',
      'GALERÍA',
    ],
    otherGoToDisplays: [
      'CONTACTO',
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    home_action: () => (dispatch(changeLocation('/'))),
    goToActions: [
      () => (dispatch(changeLocation('/conferencias'))),
      () => (dispatch(changeLocation('/talleres'))),
      () => (dispatch(changeLocation('/patrocinadores'))),
      () => (dispatch(changeLocation('/galeria'))),
    ],
    otherGoToActions: [
      () => (dispatch(changeLocation('/contacto'))),
    ],
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
