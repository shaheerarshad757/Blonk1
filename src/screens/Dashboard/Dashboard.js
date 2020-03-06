import React from 'react';
import {SafeAreaView, ImageBackground} from 'react-native';
import {BoxedCheckbox, Header} from '@components';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './Dashboard.style';

const Dashboard: props => React$Node = props => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header />
    </SafeAreaView>
  );
};

export default Dashboard;
