'use strict';
import React, { Component } from 'react';

export default class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.renderSponsors = this.renderSponsors.bind(this);
  }

  renderSponsors(element, index) {
    return (
      <div>
        <a href={ element.url } key={ index }>
          <img src={ element.src } />
        </a>
      </div>
    );
  }

  render () {
    let sponsors = this.props.sponsors.map(this.renderSponsors)
    return (
      <div className='sponsors'>
        <div className='title'>
          <h1 className='white'>Patrocinadores</h1>
        </div>
        <div className='sponsors-list'>
          { sponsors }
        </div>
      </div>
    );
  }
}
