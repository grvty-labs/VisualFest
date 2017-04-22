"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Downbar from '../components/Downbar.jsx';

function mapStateToProps(state) {
  return {
    goTo: [
      { display: '/images/logo-uaq.svg', link: 'http://www.uaq.mx' },
      { display: '/images/logo-facultad.svg', link: 'http://ba.uaq.mx/' },
      { display: '/images/logo-100uaq.svg', link: 'https://www.facebook.com/tiendauaq/' },
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Downbar);
