'use strict';
import React, { Component } from 'react';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.renderDate = this.renderDate.bind(this);
    this.renderEventsList = this.renderEventsList.bind(this);
    this.renderEvent = this.renderEvent.bind(this);
  }

  renderDate (date, index) {
    return (
      <div className='date' key={ index }>
        <div className='title'>
          <h1 className='white'>{ date.whiteTitle }</h1>
        </div>
        { this.renderEventsList(date.conferences) }
      </div>
    );
  }

  renderEventsList(conferences) {
    let info = conferences.map(this.renderEvent);
    return (
      <div className='events-list'>
        { info }
      </div>
    );
  }

  renderEvent(element, index) {
    const { owners } = this.props;
    return (
      <div key={ index } className='element'>
        <img src={ owners[element.owner].image } />
        <p>{ element.timestart }</p>
        <h4> { element.title }</h4>
        <h5>{ owners[element.owner].fullname }</h5>
      </div>);
  }

  render () {
    let dates = this.props.dates.map(this.renderDate);
    return (
      <div className='events'>
        { dates }
      </div>);
  }
}
