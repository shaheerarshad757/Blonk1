import credentials from '../store/initial-state';

const credentialsReducer = (state = credentials, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

export default credentialsReducer;
