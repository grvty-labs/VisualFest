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

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const store = configureStore();

const VisualFest = React.createClass({
  render() {
    return (
      <Provider store={ store }>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <Router history={ history }>
          <div>
            Content
            {/* <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/> */}
          </div>
        </Router>
      </Provider>
    );
  },
});

ReactDOM.render(
  <VisualFest />,
  document.getElementById('react-content'));
