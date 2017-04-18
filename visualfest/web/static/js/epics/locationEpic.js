import { ActionsObservable as Observable } from 'redux-observable';
import { push } from 'react-router-redux';

import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/mergeMap';
import {
  LOCATION_CHANGE,
  LOCATION_ANIMATE,
  NULL,
} from '../constants/actions';
import {
  ANIMATION_TIME
} from '../constants/hardcode';
import {
  animateLocation,
} from '../actions/location';

export const animateLocationEpic = (action$, store) => (
  action$.ofType(LOCATION_CHANGE)
    .take(1)
    .flatMap(action => {
      store.dispatch(animateLocation(action.payload));
      return Observable.of({ type: NULL });
    })
    .delay(ANIMATION_TIME * 2.5)
    .repeat()
  );

export const changeLocationEpic = (action$, store) => (
  action$.ofType(LOCATION_CHANGE)
    .take(1)
    .delay(ANIMATION_TIME)
    .flatMap(action => {
      store.dispatch(push(action.payload));
      return Observable.of({ type: NULL });
    })
    .delay(ANIMATION_TIME * 1.5)
    .repeat()
  );
