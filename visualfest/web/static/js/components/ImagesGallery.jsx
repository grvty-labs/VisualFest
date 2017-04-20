"use strict";
import React, { Component } from 'react';

export default class ImagesGallery extends Component{
  render() {
    let images = this.props.images.map(function (image, index) {
      return (
        <img key = { index } src = { image.src } className = "imagesGallery"/>
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
