import { combineEpics } from 'redux-observable';
import {
  animateLocationEpic,
  changeLocationEpic
} from './locationEpic';

const epics = combineEpics(
  animateLocationEpic,
  changeLocationEpic,
);

export default epics;
