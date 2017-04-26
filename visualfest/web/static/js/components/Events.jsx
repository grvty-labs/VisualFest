'use strict';
import React from 'react';
import Component from './custom/ScrollOnMountComponent.jsx';

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
        { this.renderEventsList(date.events, date.carry) }
      </div>
    );
  }

  renderEventsList(events, carry) {
    let info = events.map((e, i) => this.renderEvent(e, i, carry));
    return (
      <div className='events-list'>
        { info }
      </div>
    );
  }

  renderEvent(element, index, carry) {
    const { owners } = this.props;
    return (
      <div key={ index } className='element'
        onClick={
          () => this.props.select(carry ? index + carry : index) }>
        <img src={ element.image } />
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
