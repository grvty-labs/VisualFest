"use strict";
import React from 'react';
import { connect } from 'react-redux';
import Events from '../components/Events.jsx';

function mapStateToProps(state) {
  return {
    owners: OWNERS_ALL,
    dates: [
      {
        whiteTitle: '27 ABRIL',
        conferences: WORKSHOPS_27,
      },
      {
        whiteTitle: '28 ABRIL',
        conferences: WORKSHOPS_28,
      },
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
