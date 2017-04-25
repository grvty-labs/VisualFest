'use strict';
import React from 'react';
import Component from './custom/ScrollOnMountComponent.jsx';

export default class Home extends Component {
  render () {
    var content = this.props.bodyText.map((line, index) => (
      <p key={ index }>{ line }</p>));

    return (
      <div className='borderMain'>
        <div className='bodyMain'>
          <div className='title'>
            <h1 className='yellow'>{ this.props.yellowTitle }</h1>
            <h1 className='pink'> { this.props.pinkTitle }</h1>
          </div>

          <div className='subtitleLine'>
            <div className='containerSubtitle'>
              <div className='subtitleFormat'>
                <div className='marginSubtitle'>
                  <h3 className='white'>PIENSA,</h3>
                </div>
                <h3 className ='yellow'>/</h3>
              </div>
              <div className='subtitleFormat'>
                <div className='marginSubtitle'>
                  <h3 className='white'>INTERACTÚA</h3>
                </div>
                <h3 className ='yellow'>TRANSFORMA</h3>
              </div>
            </div>
          </div>

          <div className='white'>{ content }</div>
        </div>
      </div>
    );
  }
}
