import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AuthStack} from '../navigation/authNavigator';
import {HomeNavigator} from '../navigation/homeNavigator';
import {DrawerNavigation} from '../navigation/drawerNavigator';

// import Splash from '../screens/splash';

const RootStack = createSwitchNavigator(
  {
    AuthStack,
    HomeNavigator,
    DrawerNavigation,
  },
  {
    navigationOptions: {
      header: 'none',
    },
  },
);

export default createAppContainer(RootStack);
