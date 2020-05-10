import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/actionTypes';
import credentials from '../store/initial-state';

const credentialsReducer = (state = credentials, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        loading: true,
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default credentialsReducer;
