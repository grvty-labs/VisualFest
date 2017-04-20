"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Workshops from '../components/Workshops.jsx';

function mapStateToProps(state) {
  return {
    dates: [
      {
        whiteTitle: '27 ABRIL',
        conferences: CONFERENCES_27,
      },
      {
        whiteTitle: '28 ABRIL',
        conferences: CONFERENCES_28,
      },
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Workshops);
