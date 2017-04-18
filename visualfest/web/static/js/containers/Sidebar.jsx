"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Sidebar from '../components/Sidebar.jsx';

function mapStateToProps(state) {
  return {
    location_display: '/images/ic-checkin.svg',
    goToDisplays: [
      'CONTACTO',
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    location_action: () => (dispatch(push('/'))),
    goToActions: [
      () => (dispatch(push('/contacto'))),
    ],
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
