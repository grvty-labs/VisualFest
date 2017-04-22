'use strict';
import React, { Component } from 'react';
import Subtitle from '../components/Subtitle.jsx';

export default class Home extends Component {
  render () {
    var content = this.props.bodyText.map((line, index) => (
      <p key={ index }>{ line }</p>));

    return (
      <div className='borderMain'>
        <div className='bodyMain'>
          <div className='title'>
            <h1 className='yellow'>{ this.props.yellowTitle }</h1>
            <h1 className='pink'> { this.props.pinkTitle }</h1>
          </div>
          <Subtitle/>
          <div className='white'>{ content }</div>
        </div>
      </div>
    );
  }
}
