import { compose, createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';
// import {
//   DATA_INGREDIENTS,
//   DATA_INPUTS,
//   DATA_ORDERS,
//   DATA_RECIPES,
// } from '../constants/reducerNames';

export const history = createHistory();
// const epicMiddleware = createEpicMiddleware(epics);
let middleware = [
  // epicMiddleware,
  routerMiddleware(history),
];

if (__DEVTOOLS__) {
  const createLogger = require('redux-logger').createLogger;
  // const immutableLogger = require('redux-immutable-state-invariant').immutableStateInvariantMiddleware;

  const logger = createLogger({ collapsed: true });
  middleware = [
    ...middleware,
    logger,
  ];

} else {
  middleware = [...middleware];
}

const devToolsExt = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension()
  : f => f;

let enhancers = compose(
  applyMiddleware(...middleware),
  devToolsExt,
);

let initialState = {};

export function configureStore() {
  return createStore(
    reducers,
    initialState,
    enhancers
  );
}
