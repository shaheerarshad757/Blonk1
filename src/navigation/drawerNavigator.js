import About from '../screens/About';
import Home from '../screens/Home';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

const DrawerNavigation = createDrawerNavigator(
  {
    HomeScreen: Home,
    AboutScreen: About,
  },
  {
    initialRouteName: 'HomeScreen',
    contentOptions: {
      activeTintColor: 'red',
    },
  },
);

export {DrawerNavigation};
