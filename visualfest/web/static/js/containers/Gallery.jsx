"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Gallery from '../components/Gallery.jsx';

function mapStateToProps(state) {
  return {
    title: '2016',
    images: [
      { src: 'https://goo.gl/vkdnFs' },
      { src: 'https://goo.gl/vkdnFs' },
      { src: 'https://goo.gl/vkdnFs' },
      { src: 'https://goo.gl/vkdnFs' },
      { src: 'https://goo.gl/vkdnFs' },
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
