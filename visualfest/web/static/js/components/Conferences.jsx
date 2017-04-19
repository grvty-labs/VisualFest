"use strict";
import React, { Component } from 'react';
import Title from '../components/Title.jsx';
import ContentConference from '../components/ContentConferences.jsx';

export default class Conferences extends Component {
  render () {
    return (
      <div className = "borderConferences">
      <div className = "bodyConferences">
        <Title whiteTitle = { this.props.whiteTitle }/>
        <ContentConference conferences = { this.props.conferences }/>
    </div>
  </div>
  );
  }
}
