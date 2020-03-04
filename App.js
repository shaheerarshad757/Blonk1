import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/screens/Login/login-screen';
import Dashboard from './src/screens/Dashboard/Dashboard';
import ResetPassword from './src/screens/reset-password/ResetPassword';

const navigator = createStackNavigator(
  {
    Login: Login,
    Dashboard: Dashboard,
    ResetPassword: ResetPassword,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      //title: 'App',
      headerShown: false,
    },
  },
);

const MainApp = createBottomTabNavigator(
  {
    Home: Login,
    Settings: ResetPassword,
    Dashboard: Dashboard,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={require('./src/assets/home_icon.png')}
              style={{width: 20, height: 20}}
            />
          );
        } else if (routeName === 'Settings') {
          return (
            <Image
              source={require('./src/assets/settings_icon.png')}
              style={{width: 20, height: 20}}
            />
          );
        } else if (routeName === 'Dashboard') {
          return (
            <Image
              source={require('./src/assets/settings_icon.png')}
              style={{width: 20, height: 20}}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  },
);

export default createAppContainer(MainApp, navigator);
