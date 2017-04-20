"use strict";
import React, { Component } from 'react';

export default class ImagesGallery extends Component{
  constructor(props) {
    super(props);
    this.changeSize = this.changeSize.bind(this);
    this.state = {
      selected: -1,
    };
  }

  changeSize (index) {
    this.setState({ selected: index });
  }

  render() {
    let images = this.props.images.map((image, index) => {
      return (
        <img key = { index } src = { image.src }
          className = { this.state.selected == index
            ? 'bigImageGallery' : 'imagesGallery' }
          onClick = { () => this.changeSize(index)} />
      );
    }
  );
    return (
      <div className = "containerGallery">
        { images }
      </div>
    );
  }
}