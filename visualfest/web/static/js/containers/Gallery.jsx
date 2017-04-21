"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Gallery from '../components/Gallery.jsx';

function mapStateToProps(state) {
  return {
    sections: [
      {
        title: 'Rodolfo Soriano',
        images: CONST_GALLERY,
      },
    ]
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
