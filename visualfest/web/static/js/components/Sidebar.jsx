"use strict";
import React, { Component } from 'react';

export default class Sidebar extends Component {
  render () {
    let links = this.props.goToDisplays.map((display, index) => (
      <span key={ index } onClick={ this.props.goToActions[index] }>{ display }</span>
    ));
    return (
      <div className='sidebar'>
        <div className='sblinks'>
          { links }
        </div>
        <div className='sblocation'>
          <img src={ this.props.location_display }
            onClick={ this.props.location_action }/>
        </div>
      </div>);
  }
}
