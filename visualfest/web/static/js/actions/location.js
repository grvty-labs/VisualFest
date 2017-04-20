import {
  LOCATION_CHANGE,
  LOCATION_ANIMATE,
} from '../constants/actions';

export function changeLocation(location) {
  return {
    type: LOCATION_CHANGE,
    payload: location,
  };
}

export function animateLocation(location) {
  return {
    type: LOCATION_ANIMATE,
    payload: location,
  };
}
