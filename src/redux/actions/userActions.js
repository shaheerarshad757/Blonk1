// export function loginPressed(email, password) {
//   return {
//     type: 'LOGIN',
//     payload: {
//       email: '',
//       password: '',
//     },
//   };
// }

export const loginPressed = (email,password) => ({
  type: 'LOGIN',
  payload: {
    email,
    password,
  }
});
