// import {createStore} from 'redux';
// import currentUser from '../reducers';
//
// const rootReducer = () => {
//   currentUser;
// };
//
// export default rootReducer;

import {createStore} from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;
