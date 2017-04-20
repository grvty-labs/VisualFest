import {
  LOCATION_ANIMATE,
} from '../../constants/actions';

const initialState = {
  pathname: '',
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LOCATION_ANIMATE:
      return {
        pathname: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
