'use strict';
import React from 'react';
import { connect } from 'react-redux';
import EventDetail from '../components/EventDetail.jsx';
import {
  DATA_OWNERS,
  DATA_WORKSHOPS,
  UI_ROUTING,
} from '../constants/reducers';

const regex = /\d+/;

function mapStateToProps(state, ownProps) {
  let id = parseInt(ownProps.match.params.id);
  let workshop = state[DATA_WORKSHOPS].workshops[id];
  let owner = state[DATA_OWNERS].owners[workshop.owner];

  return {
    owner,
    event: workshop,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
