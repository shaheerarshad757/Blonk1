import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import {createStore} from 'redux';
import reducers from '../src/redux/reducers';

import App from "./App";

const AppContainer: () => React$Node = () => {
  return (
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  );
};

export default AppContainer;
