'use strict';
import React, { Component } from 'react';

export default class Downbar extends Component {
  render () {
    let links = this.props.goTo.map((element, index) => (
      <a key={ index } href={ element.link }>
        <img src={ element.display } />
      </a>
    ));

    return (
      <div className='downbar'>
        <div className='dbline'></div>
        <div className='dblinks'>
          { links }
        </div>
      </div>);
  }
}
