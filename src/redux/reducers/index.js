import {combineReducers} from 'redux';
// import AuthReducer from './user.reducer';
import userReducer from "./user.reducer";


// export default combineReducers({
//   auth: AuthReducer,
// });

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
