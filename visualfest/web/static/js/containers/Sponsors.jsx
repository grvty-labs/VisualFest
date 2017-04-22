"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Sponsors from '../components/Sponsors.jsx';

function mapStateToProps(state) {
  return {
    sponsors: SPONSORS_IMAGES,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Sponsors);
