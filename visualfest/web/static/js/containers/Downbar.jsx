"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Downbar from '../components/Downbar.jsx';

function mapStateToProps(state) {
  return {
    goTo: [
      { display: 'https://github.com/fluidicon.png', link: 'https://github.com/fluidicon.png' },
      { display: 'https://github.com/fluidicon.png', link: 'https://github.com/fluidicon.png' },
      { display: 'https://github.com/fluidicon.png', link: 'https://github.com/fluidicon.png' },
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Downbar);
