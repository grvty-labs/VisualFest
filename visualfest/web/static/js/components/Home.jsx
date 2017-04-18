"use strict";
import React, { Component } from 'react';
import TextBox from '../components/TextBox.jsx';
import Title from '../components/Title.jsx';
import Subtitle from '../components/Subtitle.jsx';

export default class Home extends Component {
  render () {
    return (
      <div className = "bodyMain">
      <Title yellowTitle = { this.props.yellowTitle } pinkTitle = { this.props.pinkTitle }/>
      <TextBox text={  this.props.bodyText } />
    </div>
  );
  }
}
