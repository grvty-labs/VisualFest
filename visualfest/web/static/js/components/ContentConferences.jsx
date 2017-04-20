"use strct";
import React, { Component } from 'react';

export default class ContentConference extends Component {
  constructor(props) {
    super(props);
    this.renderContainer = this.renderContainer.bind(this);
  }

  renderContainer(element, index) {
    return (
      <div key={ index } className='element'>
        <img src={ element.image } />
        <p>{ element.timestart }</p>
        <h4> { element.title }</h4>
        <h5>{ element.fullname }</h5>
      </div>);
  }

  render() {
    let info = this.props.conferences.map(this.renderContainer);
    return (
      <div className='conferencesContainer'>
        { info }
      </div>
    );
  }
}
