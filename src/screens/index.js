import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AuthStack} from '../navigation/authNavigator';
import {HomeStackNavigator} from '../navigation/homeNavigator';
import {DrawerNavigation} from '../navigation/drawerNavigator';

// import Splash from '../screens/splash';

const RootStack = createSwitchNavigator(
  {
    AuthStack,
    HomeStackNavigator,
    DrawerNavigation,
  },
  {
    navigationOptions: {
      header: 'none',
    },
  },
);

export default createAppContainer(RootStack);
