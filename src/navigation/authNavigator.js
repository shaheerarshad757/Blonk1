import {createStackNavigator} from 'react-navigation-stack';
import ResetPassword from '../screens/reset-password/ResetPassword';
import Login from '../screens/Login/login-screen';

const AuthStack = createStackNavigator(
  {
    Login: {screen: Login},
    ResetPassword: {screen: ResetPassword},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
);

AuthStack.navigationOptions = {
  cardStyle: {
    backgroundColor: 'transparent',
  },
};

export {AuthStack};
