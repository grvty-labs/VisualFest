'use strict';
import React, { Component } from 'react';

export default class Subtitle extends Component{
  render() {
    return (
      <div className = "subtitleLine">
      <div className = "containerSubtitle">
        <div className = "subtitleFormat">
          <h3 className = "white">PIENSA,</h3>
          <h3 className ="yellow">/</h3>
        </div>
        <div className = "subtitleFormat">
          <h3 className = "white">INTERACTÚA</h3>
          <h3 className ="yellow">TRANSFORMA</h3>
        </div>
        </div>
      </div>
    );
  }
}
