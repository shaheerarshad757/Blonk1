import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AuthStack} from '../navigation/authNavigator';
import {HomeNavigator} from '../navigation/homeNavigator';
// import {HomeNavigator} from '../navigation/home-navigator';
// import Splash from '../screens/splash';

const RootStack = createSwitchNavigator(
  {
    AuthStack,
    HomeNavigator,
  },
  {
    navigationOptions: {
      header: 'none',
    },
  },
);

export default createAppContainer(RootStack);
