// export function loginPressed(email, password) {
//   return {
//     type: 'LOGIN',
//     payload: {
//       email: '',
//       password: '',
//     },
//   };
// }
// import {credentials} from '../store/initial-state';
import {LOGIN} from './actionTypes';

const loginPressed = (email,password) => ({
  type: LOGIN,
  payload: email,
  password,
});

export default loginPressed;
