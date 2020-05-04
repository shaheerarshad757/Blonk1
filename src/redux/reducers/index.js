import credentialsReducer from './credentialsReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  credentialsReducer,
});

export default rootReducer;
