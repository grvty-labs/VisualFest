"use strict";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  ConnectedRouter as Router,
  push
} from 'react-router-redux';
import { Route, Switch } from 'react-router';
import {
  configureStore,
  history,
} from './store';

import BlotLeft from './containers/BlotLeft.jsx';
import BlotRight from './containers/BlotRight.jsx';
import ConferenceDetail from './containers/ConferenceDetail.jsx';
import Conferences from './containers/Conferences.jsx';
import Contact from './containers/Contact.jsx';
import Downbar from './containers/Downbar.jsx';
import Gallery from './containers/Gallery.jsx';
import Home from './containers/Home.jsx';
import Revealer from './containers/Revealer.jsx';
import Sidebar from './containers/Sidebar.jsx';
import Sponsors from './containers/Sponsors.jsx';
import Topbar from './containers/Topbar.jsx';
import WorkshopDetail from './containers/WorkshopDetail.jsx';
import Workshops from './containers/Workshops.jsx';

const store = configureStore();

class VisualFest extends Component {
  render() {
    return (
      <Provider store={ store }>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <Router history={ history }>
          <div className='react-body'>
            <BlotLeft />
            <BlotRight />
            <Topbar />
            <div className='route-content'>
              {/* <CSSTransitionGroup
                transitionName='route'
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                transitionEnter={true}
              transitionLeave={true}> */}
              <Switch>
                <Route key={1} exact path="/" component={ Home }/>
                <Route key={2} exact path="/conferencias/:id" component={ ConferenceDetail }/>
                <Route key={3} path="/conferencias" component={ Conferences }/>
                <Route key={4} exact path="/talleres/:id" component={ WorkshopDetail }/>
                <Route key={5} path="/talleres" component={ Workshops }/>
                <Route key={6} path="/patrocinadores" component={ Sponsors }/>
                <Route key={7} path="/galeria" component={ Gallery }/>
                <Route key={8} path="/contacto" component={ Contact }/>
              </Switch>
              {/* </CSSTransitionGroup> */}
            </div>
            <Sidebar />
            <Downbar />
            <Revealer />
          </div>
        </Router>
      </Provider>
    );
  }
};

ReactDOM.render(
  <VisualFest />,
  document.getElementById('react-content'));
