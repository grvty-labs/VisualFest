"use strict";
import React, { Component } from 'react';
import Title from '../components/Title.jsx';
import ImagesGallery from '../components/ImagesGallery.jsx';

export default class Gallery extends Component {
  render () {
    return (
      <div className = "gallery">
        <Title whiteTitle = {this.props.title }/>
        <ImagesGallery images = { this.props.images }/>
      </div>
    );
  }
}
