'use strict';
import React from 'react';
import { connect } from 'react-redux';
import EventDetail from '../components/EventDetail.jsx';
import {
  DATA_CONFERENCES,
  DATA_OWNERS,
  UI_ROUTING,
} from '../constants/reducers';

const regex = /\d+/;

function mapStateToProps(state, ownProps) {
  let id = parseInt(ownProps.match.params.id);
  let conference = state[DATA_CONFERENCES].conferences[id];
  let owner = state[DATA_OWNERS].owners[conference.owner];

  return {
    event: conference,
    owner,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
