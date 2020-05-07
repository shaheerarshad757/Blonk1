import React from 'react';
import 'react-native-gesture-handler';
import RootStack from '../src/screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: () => React$Node = () => {
  return (
    <SafeAreaProvider>
      <RootStack />
    </SafeAreaProvider>
  );
};

export default App;
