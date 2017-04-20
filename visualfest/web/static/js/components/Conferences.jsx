"use strict";
import React, { Component } from 'react';
import Title from '../components/Title.jsx';
import ContentConference from '../components/ContentConferences.jsx';

export default class Conferences extends Component {
  constructor(props) {
    super(props);
    this.renderDate = this.renderDate.bind(this);
  }

  renderDate (date, index) {
    return (
      <div className='bodylist' key={ index }>
        <Title whiteTitle={ date.whiteTitle }/>
        <ContentConference conferences={ date.conferences }/>
      </div>
    );
  }

  render () {
    let dates = this.props.dates.map(this.renderDate);
    return (
      <div className = 'conferences'>
        { dates }
      </div>);
  }
}
