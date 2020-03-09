import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {TabBarIcon} from '@components';
import Dashboard from '../screens/Dashboard/Dashboard';
import Insights from '../screens/Insights/Insights';
import Reviews from '../screens/Reviews/Reviews';
import Social from '../screens/Social/Social';
import About from '../screens/About';
import Home from '../screens/Home';

const HomeNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: props => <TabBarIcon {...props} name="dashboard" />,
      },
    },
    Insights: {
      screen: Insights,
      navigationOptions: {
        tabBarIcon: props => <TabBarIcon {...props} name="insights" />,
      },
    },
    Reviews: {
      screen: Reviews,
      navigationOptions: {
        tabBarIcon: props => <TabBarIcon {...props} name="reviews" />,
      },
    },
    Social: {
      screen: Social,
      navigationOptions: {
        tabBarIcon: props => <TabBarIcon {...props} name="social" />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#1886DF',
      inactiveTintColor: '#AEBCCC',
      labelStyle: {
        fontSize: 11,
      },
      style: {
        shadowOpacity: 0.05,
        shadowRadius: 5,
        borderTopWidth: 0,
        elevation: 15,
      },
    },
  },
);

export const Drawer = createDrawerNavigator(
  {
    HomeScreen: Home,
    AboutScreen: About,
  },
  {
    drawerWidth: 250,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

export {HomeNavigator};