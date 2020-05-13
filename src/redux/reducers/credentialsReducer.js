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
    // case LOGIN_SUCCESS: {
    //   console.log('Result', action.result.data);
    //   return {
    //     ...state,
    //     email: action.result.data.email,
    //     password: action.result.data.password,
    //   };
    //   // return {
    //   //   ...state,
    //   //   loading: false,
    //   //   result: action.result,
    //   //   error: null,
    //   // };
    // }
    // case LOGIN_FAILURE: {
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error,
    //   };
    // }
    default:
      return state;
  }
};

export default credentialsReducer;
