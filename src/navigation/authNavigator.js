import {createStackNavigator} from 'react-navigation-stack';
// import { TransitionSpecs } from '@react-navigation/stack';
import ResetPassword from '../screens/reset-password';
import Login from '../screens/Login';

const AuthStack = createStackNavigator(
  {
    Login: {screen: Login},
    ResetPassword: {screen: ResetPassword},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    defaultNavigationOptions: {
      // cardStyle: {
      //   backgroundColor: 'transparent',
      //   cardOverlayEnabled: 'false',
      // },
    },
  },
);

AuthStack.navigationOptions = {
  cardStyle: {
    backgroundColor: 'transparent',
  },
};

export {AuthStack};
