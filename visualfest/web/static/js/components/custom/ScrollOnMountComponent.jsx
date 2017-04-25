import React, { Component } from 'react';

class PageComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
};

export default PageComponent;
