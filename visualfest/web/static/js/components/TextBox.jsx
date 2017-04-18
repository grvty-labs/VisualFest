'use strict';
import React, { Component } from 'react';

export default class TextBox extends Component {
  render() {
    var texto = this.props.text.map(function (line, index) {
      return (
        <p key = { index }>
          { line.body }
        </p>
    );
    }
  );
    return (
    { texto }
  );
  }
}
