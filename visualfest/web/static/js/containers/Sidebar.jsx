"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { changeLocation } from '../actions/location';
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
    location_action: () => (dispatch(changeLocation('/contacto'))),
    goToActions: [
      () => (dispatch(changeLocation('/contacto'))),
    ],
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
