import {createStackNavigator} from 'react-navigation-stack';
// import { TransitionSpecs } from '@react-navigation/stack';
import Insights from '../screens/Insights/Insights';
import Dashboard from '../screens/Dashboard/Dashboard';

const DashboardStack = createStackNavigator(
  {
    Dashboard: {screen: Dashboard},
    Insights: {screen: Insights},
  },
  {
    initialRouteName: 'Dashboard',
    headerMode: 'none',
    defaultNavigationOptions: {
      // cardStyle: {
      //   backgroundColor: 'transparent',
      //   cardOverlayEnabled: 'false',
      // },
    },
  },
);

DashboardStack.navigationOptions = {
  cardStyle: {
    backgroundColor: 'transparent',
  },
};

export {DashboardStack};
