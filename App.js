import React from 'react';
import {Platform} from 'react-native';
import 'react-native-gesture-handler';
import RootStack from './src/screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//import NavigationService from '@navigation/navigation-service';

//App CODE COPIED FROM CIALFO
const App: () => React$Node = () => {
  return (
    <SafeAreaProvider>
      <RootStack/>
    </SafeAreaProvider>
  );
};
export default App;
