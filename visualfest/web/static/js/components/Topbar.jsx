'use strict';
import React, { Component } from 'react';

export default class Topbar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.clickLink = this.clickLink.bind(this);
    this.state = {
      show: false,
    };
  }

  toggleMenu() {
    this.setState({ show: !this.state.show });
  }

  clickLink(action) {
    action();
    this.setState({ show: false });
  }

  render () {
    let links = this.props.goToDisplays.map((display, index) => (
      <span key={ index } onClick={ () => this.clickLink(this.props.goToActions[index]) }>
        { display }
      </span>
    ));

    let otherLinks = this.props.otherGoToDisplays.map((display, index) => (
      <span key={ index } onClick={ () => this.clickLink(this.props.otherGoToActions[index]) }>
        { display }
      </span>
    ));

    return (
      <nav className='topbar'>
        <div className='tbwrapper'>
          <div className='tblogo'>
            <img src={ this.props.home_display }
              onClick={ () => this.clickLink(this.props.home_action) }/>
          </div>
          <div className='tblinks'>
            { links }
          </div>
          <div className='tbburger'>
            <img src={ this.props.burguer_icon }
              onClick={ this.toggleMenu }/>
          </div>
        </div>
        <div className={ this.state.show ? 'tbmobilelinks show' : 'tbmobilelinks'}>
          { links }
          { otherLinks }
        </div>
      </nav>);
  }
}
