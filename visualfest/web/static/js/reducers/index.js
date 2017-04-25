import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import {
  DATA_CONFERENCES,
  DATA_OWNERS,
  DATA_WORKSHOPS,
  UI_APP,
} from '../constants/reducers';
import UIAppReducer from './ui/app';
import DataConferencesReducer from './data/conferences';
import DataOwnersReducer from './data/owners';
import DataWorkshopsReducer from './data/workshops';

const reducersJson = {
  // form: formReducer,
  routing: routerReducer,
};

// UI Reducers
reducersJson[UI_APP] = UIAppReducer;

// Data Reducers
reducersJson[DATA_CONFERENCES] = DataConferencesReducer;
reducersJson[DATA_OWNERS] = DataOwnersReducer;
reducersJson[DATA_WORKSHOPS] = DataWorkshopsReducer;

export const reducers = combineReducers(reducersJson);

export default reducers;
