import credentialsReducer from './currentUser';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  credentialsReducer,
});

export default rootReducer;
