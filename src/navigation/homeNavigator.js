import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {TabBarIcon} from '@components';
import Dashboard from '../screens/Dashboard/Dashboard';
import Post from '../screens/Dashboard/Post';
import ReviewGeneration from '../screens/Dashboard/ReviewGeneration';
import EditListing from '../screens/Dashboard/EditListing';
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

const DrawerNavigation = createDrawerNavigator(
  {
    HomeScreen: Home,
    AboutScreen: About,
  },
  {},
  // {
  //   //For the Custom sidebar menu we have to provide our CustomSidebarMenu
  // contentComponent: CustomSidebarMenu,
  //   //Sidebar width
  //   drawerWidth: 300,
  // },
);

const HomeStackNavigator = createStackNavigator(
  {
    HomeStack: {screen: HomeNavigator},
    Drawer: {screen: DrawerNavigation},
    Post: {screen: Post},
    ReviewGeneration: {screen: ReviewGeneration},
    EditListing: {screen: EditListing},
  },
  {
    initialRouteName: 'HomeStack',
    headerMode: 'none',
    // defaultNavigationOptions: {
    //   cardStyle: {
    //     backgroundColor: 'transparent',
    //     cardOverlayEnabled: 'true',
    //   },
    // },
  },
);

export {HomeStackNavigator};
