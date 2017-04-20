"use strict";
import React, { Component } from 'react';
import {
  BLOT_ANIMATION_TIME,
  BLOT_ANIMATION_DIFFERENCE,
} from '../constants/hardcode.js';
import anime from 'animejs';

export default class Blot extends Component {
  constructor(props) {
    super(props);
    this.targets = `.blot.${this.props.className} img`;
    this.options = {
      easing: 'easeInOutQuad',
      direction: 'alternate',
      delay: 0,
      duration: anime.random(BLOT_ANIMATION_TIME, BLOT_ANIMATION_TIME - BLOT_ANIMATION_DIFFERENCE),
      rotate: [
        { value: -15 },
        { value: 15 },
      ],
      loop: true,
      elasticity: 300,
    };
  }

  componentDidMount() {
    let animeProps = Object.assign({}, { targets: this.targets }, this.options);
    this.anime = anime(animeProps);
  }

  render() {
    return (
      <div className={`blot ${this.props.className}`}>
        <img src={ this.props.image }/>
      </div>
    );
  }
}
