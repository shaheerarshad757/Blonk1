import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from './actionTypes';

export const loginPressed = (email, password) => ({
  type: LOGIN,
  payload: email,
  password,
});

export const setLoginSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    token,
  };
};

export const setLoginError = error => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};
