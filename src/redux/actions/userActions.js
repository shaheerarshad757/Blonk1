import {LOGIN} from './actionTypes';

const loginPressed = (email,password) => ({
  type: LOGIN,
  payload: email,
  password,
});

export default loginPressed;
