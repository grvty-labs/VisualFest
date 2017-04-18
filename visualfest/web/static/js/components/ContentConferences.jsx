"use strct";
import React, { Component } from 'react';

export default class ContentConference extends Component{
  render() {
    var info = this.props.conferences.map(function (conference, index) {
      return (
        <div key = {index} className = "conferencesContainer">
          <img src = { conference.image } className = "imageConference"></img>
          <p className = "imageHour">{ conference.hour }</p>
          <h4 className = "imageInformation"> { conference.information }</h4>
          <h5 className = "imageName">{ conference.name }</h5>
        </div>
      );
    }
  );
    return (
      <div>
        { info }
      </div>
    );
  }
}
