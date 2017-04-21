'use strict';
import React, { Component } from 'react';

export default class Topbar extends Component {
  render () {
    let links = this.props.goToDisplays.map((display, index) => (
      <span key={ index } onClick={ this.props.goToActions[index] }>{ display }</span>
    ));
    return (
      <nav className='topbar'>
        <div className='tblogo'>
          <img src={ this.props.home_display }
            onClick={ this.props.home_action }/>
        </div>
        <div className='tblinks'>
          { links }
        </div>
      </nav>);
  }
}
