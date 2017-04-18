"use strict";
import React, { Component } from 'react';
import { ANIMATION_TIME } from '../constants/hardcode.js';
import anime from 'animejs';

export default class Revealer extends Component {
  constructor(props) {
    super(props);
    this.targets = '#morphing .polymorph';
    this.options = {
      // d: 'M 0,0 L 10,0 L 10,10 C 10,10 10,10 5,10 C 0,10 0,10 0,10 Z;M 0,0 L 10,0 L 10,0 C 10,0 10,5 5,5 C 0,5 0,0 0,0 Z;M 0,0 L 10,0 L 10,0 C 10,0 10,0 5,0 C 0,0 0,0 0,0 Z',
      // d: 'M 0,0 L 10,0 L 10,10 C 10,10 10,10 5,10 C 0,10 0,10 0,10 Z',
      d: 'M 0,0 L 10,0 L 10,0 C 10,0 10,5 5,5 C 0,5 0,0 0,0 Z',
      // d: 'M 0,0 L 10,0 L 10,0 C 10,0 10,0 5,0 C 0,0 0,0 0,0 Z',
      // d: 'M 0,0 10,0 10,10 0,10 Z',
      // d: 'M 0,0 10,0 10,6 0,8 Z',
      // d: 'M 0,0 10,0 10,0 0,0 Z',
      easing: 'easeOutQuad',
      direction: 'alternate',
      delay: 150,
      duration: ANIMATION_TIME,
      loop: 2,
    };
  }

  componentDidMount() {
    this.createAnime(this.options);
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.createAnime(this.options);
    return true;
  }

  createAnime(props) {
    let animeProps = Object.assign({}, { targets: this.targets }, props);
    this.anime = anime(animeProps);
  }

  render () {
    return (
      <div className='revealer'>
        <div id='morphing' className='morphing'>
          <svg width='100%' height='100%' viewBox='.5 0 9 2'
            preserveAspectRatio='none'
            style={{
              left: '-1px',
              overflow: 'hidden',
              pointerEvents: 'none',
              position: 'absolute',
              top: '-1px',
            }}>
            <path className="polymorph" fill='#02161E' d='M 0,0 L 10,0 L 10,0 C 10,0 10,0 5,0 C 0,0 0,0 0,0 Z;M 0,0 L 10,0 L 10,0 C 10,0 10,5 5,5 C 0,5 0,0 0,0 Z;M 0,0 L 10,0 L 10,10 C 10,10 10,10 5,10 C 0,10 0,10 0,10 Z'/>
          </svg>
        </div>
      </div>
    );
  }
}
