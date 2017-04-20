"use strict";
import React, { Component } from 'react';
import Title from '../components/Title.jsx';
import TextBox from '../components/TextBox.jsx';

export default class About extends Component {
  render () {
    return (
      <div className = 'bodyAboutUs'>
        <Title whiteTitle = { this.props.whiteTitle }/>
        <TextBox text = { this.props.bodyText }/>
    </div>
  );
  }
}
