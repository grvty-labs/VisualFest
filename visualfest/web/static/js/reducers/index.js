import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
// import {
//   DATA_INGREDIENTS,
// } from '../constants/reducerNames';

const reducersJson = {
  // form: formReducer,
  routing: routerReducer,
};

// UI Reducers
// reducersJson[UI_INGREDIENT_TABLE] = UIIngredientTable;

// Data Reducers

export const reducers = combineReducers(reducersJson);

export default reducers;
