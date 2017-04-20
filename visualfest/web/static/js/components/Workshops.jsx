"use strict";
import React, { Component } from 'react';
import Title from '../components/Title.jsx';
import ContentConference from '../components/ContentConferences.jsx';

export default class Workshops extends Component {
  constructor(props) {
    super(props);
    this.renderDate = this.renderDate.bind(this);
  }

  renderDate (date, index) {
    return (
      <div className='bodylist' key={ index }>
        <Title whiteTitle={ date.whiteTitle }/>
        <ContentConference
          owners={ this.props.owners }
          conferences={ date.conferences }/>
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
