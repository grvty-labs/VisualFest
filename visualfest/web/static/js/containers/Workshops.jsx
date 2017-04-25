'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Events from '../components/Events.jsx';
import {
  DATA_OWNERS,
  DATA_WORKSHOPS,
} from '../constants/reducers';
import { changeLocation } from '../actions/location';

function mapStateToProps(state) {
  return {
    owners: state[DATA_OWNERS].owners,
    dates: [
      {
        whiteTitle: '27 ABRIL',
        events: state[DATA_WORKSHOPS].workshops.filter(
          (workshop) => (workshop.date == 27)),
      },
      {
        whiteTitle: '28 ABRIL',
        events: state[DATA_WORKSHOPS].workshops.filter(
          (workshop) => (workshop.date == 28)),
      },
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    select: (index) => (dispatch(changeLocation(`/talleres/${index}`))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
