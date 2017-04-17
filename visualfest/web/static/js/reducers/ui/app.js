import {
  LOCATION_CHANGE
} from '../../constants/actions';

const initialState = {
  pathname: '',
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        pathname: action.payload.pathname,
      };

    default:
      return {
        ...state,
      };
  }
}
