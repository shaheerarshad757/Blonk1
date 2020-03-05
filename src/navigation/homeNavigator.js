import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {TabBarIcon} from '@components';
import Dashboard from '../screens/Dashboard/Dashboard';

const HomeNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: props => <TabBarIcon {...props} name="dashboard" />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'blue',
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

export {HomeNavigator};
