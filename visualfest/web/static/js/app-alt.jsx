"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  ConnectedRouter as Router,
  push
} from 'react-router-redux';
import { Route } from 'react-router';
import {
  configureStore,
  history,
} from './store';
import About from './containers/About.jsx';
import Conferences from './containers/Conferences.jsx';
import Contact from './containers/Contact.jsx';
import Downbar from './containers/Downbar.jsx';
import Gallery from './containers/Gallery.jsx';
import Home from './containers/Home.jsx';
import Sidebar from './containers/Sidebar.jsx';
import Sponsors from './containers/Sponsors.jsx';
import Topbar from './containers/Topbar.jsx';
import Workshops from './containers/Workshops.jsx';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const store = configureStore();

const VisualFest = React.createClass({
  render() {
    return (
      <Provider store={ store }>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <Router history={ history }>
          <div className='react-body'>
            <Topbar />
            <div className='route-content'>
              <CSSTransitionGroup
                transitionName='route'
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
                <Route key={1} exact path="/" component={ Home }/>
                <Route key={2} path="/acerca" component={ About }/>
                <Route key={3} path="/conferencias" component={ Conferences }/>
                <Route key={4} path="/talleres" component={ Workshops }/>
                <Route key={5} path="/patrocinadores" component={ Sponsors }/>
                <Route key={6} path="/galeria" component={ Gallery }/>
                <Route key={7} path="/contacto" component={ Contact }/>
              </CSSTransitionGroup>
              </div>
            <Sidebar />
            <Downbar />
          </div>
        </Router>
      </Provider>
    );
  },
});

ReactDOM.render(
  <VisualFest />,
  document.getElementById('react-content'));
