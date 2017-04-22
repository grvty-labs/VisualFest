"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Gallery from '../components/Gallery.jsx';

function mapStateToProps(state) {
  return {
    sections: [
      {
        title: 'Portafolio',
        images: CONST_GALLERY_PORTFOLIO,
      },
    ]
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
