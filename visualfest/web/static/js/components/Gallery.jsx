'use strict';
import React from 'react';
import Component from './custom/ScrollOnMountComponent.jsx';
import Masonry from 'react-masonry-component';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.renderImagesSection = this.renderImagesSection.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.masonry_options = {
      resize: true,
      transitionDuration: '0.3s',
      initLayout: true,
    };

    this.state = {
      selected: -1,
    };
  }

  selectImage(index) {
    if (index == this.state.selected) index = -1;
    this.setState({ selected: index });
  }

  renderImagesSection(section, index) {
    let content = section.images.map(this.renderImage);
    return (
      <div className='section' key={ index }>
        <div className='title'>
          <h1 className='white'>{ section.title }</h1>
        </div>
        <Masonry
          className={'images-list'} // default ''
          elementType={'div'} // default 'div'
          options={this.masonry_options} // default {}
          disableImagesLoaded={ false } // default false
          updateOnEachImageLoad={ false } // default false and works only if disableImagesLoaded is false
        >
          { content }
        </Masonry>
      </div>
    );
  }

  renderImage(element, index) {
    return (
      <div key={ index } onClick={ () => this.selectImage(index) }
        className={ this.state.selected == index ? 'image big' : 'image' }>
        <img src={ element.src }/>
        <div className='info'>
          <h4>{ element.title }</h4>
        </div>
      </div>);
  }

  render () {
    let sections = this.props.sections.map(this.renderImagesSection);
    return (
      <div className='gallery'>
        { sections }
      </div>
    );
  }
}
