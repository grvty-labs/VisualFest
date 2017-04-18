'use strict';
import React, { Component } from 'react';

export default class TextBox extends Component {
  render() {
    return (
        <div className = "textBox">
          { this.props.text }
        </div>
    );
  }
}
