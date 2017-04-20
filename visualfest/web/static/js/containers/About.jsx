"use strict";
import React from 'react';
import { connect } from 'react-redux';
import About from '../components/About.jsx';

function mapStateToProps(state) {
  return {
    whiteTitle: '¿QUÉ ES EL VISUALFEST?',
    bodyText: [
    { body: 'Successful businesses have many things in common, today we’ll look at the big ‘R’of recognition and how a digital advertising network may help.' },
    { body: 'Recognition can be illustrated by two individuals entering a crowded room at a party. Both walk to the far side of the room, one of them slips through the crowd easily and unnoticed as they reach the far side. The second person takes much longer to reach the far side because they are engaged in conversations along the way as they continue to meet acquaintances and friends during their path. Which type of person would you like to model your business after?'},
    { body: 'Your business is in a continual battle for your customers’ recognition whether you know it or not. If you happen to be fortunate enough to be in a marketplace with very few competitors, that will not last for long. You need your business to be at the forefront of your client’s minds so that when they require your products'},
  ]
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
