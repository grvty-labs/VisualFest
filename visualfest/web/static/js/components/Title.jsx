'use strict';
import React, { Component } from 'react';

export default class Title extends Component{
  render() {
    return (
      <div className='title'>
        <h1 className='yellow'>{ this. props. yellowTitle }</h1>
        <h1 className='pink'> { this.props.pinkTitle }</h1>
        <h1 className='white'>{this.props.whiteTitle}</h1>
      </div>
    );
  }
}
