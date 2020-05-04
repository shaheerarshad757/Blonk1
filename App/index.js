import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
// import rootReducer from '../src/redux/store';
import store from '../src/redux/store';

import App from './App';

const AppContainer: () => React$Node = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;
