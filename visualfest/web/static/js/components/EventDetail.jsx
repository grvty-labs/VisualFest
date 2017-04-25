'use strict';
import React from 'react';
import Component from './custom/ScrollOnMountComponent.jsx';

class EventDetail extends Component {
  render() {
    let {
      owner,
      event,
    } = this.props;

    let description = event.description.map((text, index) => (
      <p key={index}>{ text }</p>));

    return (
      <div className='event-detail'>
        <div className='owner'>
          <img className='avatar' src={ owner.avatar }/>
          <h3 className='fullname'>{ owner.fullname }</h3>
        </div>
        <div className='info'>
          <div className='description'>
            <h1>{ event.title }</h1>
            { description }
          </div>
          <div className='schedule'>
            <span className='line'></span>
            <span>{ event.timestart }</span>
            <span>{ event.timeend }</span>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetail;
