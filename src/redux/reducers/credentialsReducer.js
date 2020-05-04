import {LOGIN} from '../actions/actionTypes';

const initialState = {
  email: '',
  password: '',
};

const credentialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: state.email,
        password: state.password,
      };
    default:
      return state;
  }
};

export default credentialsReducer;
