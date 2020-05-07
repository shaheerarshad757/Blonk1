import {LOGIN} from '../actions/actionTypes';
import credentials from '../store/initial-state';

const credentialsReducer = (state = credentials, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default credentialsReducer;
