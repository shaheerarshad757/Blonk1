import {LOGIN} from './actionTypes';

const loginPressed = credentials => ({
  type: LOGIN,
  payload: credentials
});

export default loginPressed;
