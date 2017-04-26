'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Events from '../components/Events.jsx';
import {
  DATA_CONFERENCES,
  DATA_OWNERS,
} from '../constants/reducers';
import { changeLocation } from '../actions/location';

function mapStateToProps(state) {
  return {
    owners: state[DATA_OWNERS].owners,
    dates: [
      {
        whiteTitle: '27 ABRIL',
        events: state[DATA_CONFERENCES].conferences.filter(
          (conference) => (conference.date == 27)),
      },
      {
        whiteTitle: '28 ABRIL',
        carry: state[DATA_CONFERENCES].conferences.filter(
          (conference) => (conference.date == 27)).length,
        events: state[DATA_CONFERENCES].conferences.filter(
          (conference) => (conference.date == 28)),
      },
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    select: (index) => (dispatch(changeLocation(`/conferencias/${index}`))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
