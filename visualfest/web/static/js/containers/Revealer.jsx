"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { UI_APP } from '../constants/reducers.js';
import Revealer from '../components/Revealer.jsx';

function mapStateToProps(state) {
  return {
    location: state[UI_APP].pathname,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Revealer);
