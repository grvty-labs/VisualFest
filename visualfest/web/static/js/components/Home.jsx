'use strict';
import React, { Component } from 'react';
import Title from '../components/Title.jsx';
import Subtitle from '../components/Subtitle.jsx';

export default class Home extends Component {
  render () {
    var content = this.props.bodyText.map((line, index) => (
      <p key={ index }>{ line }</p>));

    return (
      <div className='borderMain'>
        <div className='bodyMain'>
          <Title
            yellowTitle={ this.props.yellowTitle }
            pinkTitle={ this.props.pinkTitle }/>
          <Subtitle/>
          <div className='white'>{ content }</div>
        </div>
      </div>
    );
  }
}
