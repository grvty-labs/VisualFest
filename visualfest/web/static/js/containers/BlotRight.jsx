"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Blot from '../components/Blot.jsx';

function mapStateToProps(state) {
  return {
    className: 'right',
    image: '/images/plasta-amarilla.svg',
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Blot);
