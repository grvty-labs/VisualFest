"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Topbar from '../components/Topbar.jsx';

function mapStateToProps(state) {
  return {
    home_display: 'https://github.com/fluidicon.png',
    goToDisplays: [
      'ACERCA',
      'CONFERENCIAS',
      'TALLERES',
      'PATROCINADORES',
      'GALERÍA',
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    home_action: () => (dispatch(push('/'))),
    goToActions: [
      () => (dispatch(push('/acerca'))),
      () => (dispatch(push('/conferencias'))),
      () => (dispatch(push('/talleres'))),
      () => (dispatch(push('/patrocinadores'))),
      () => (dispatch(push('/galeria'))),
    ],
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
