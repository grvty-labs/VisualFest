"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Downbar from '../components/Downbar.jsx';

function mapStateToProps(state) {
  return {
    goTo: [
      { display: '/images/logo-uaq.svg', link: 'https://github.com/fluidicon.png' },
      { display: '/images/logo-facultad.svg', link: 'https://github.com/fluidicon.png' },
      { display: '/images/logo-100uaq.svg', link: 'https://github.com/fluidicon.png' },
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Downbar);
