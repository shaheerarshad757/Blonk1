import React from 'react';
import {SafeAreaView, ImageBackground} from 'react-native';
import {BoxedCheckbox, Header} from '@components';
import { FloatingAction } from "react-native-floating-action";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './Dashboard.style';

const actions = [
  {
    text: 'Upload Media',
    icon: require('../../assets/home_icon.png'),
    name: 'Upload Media',
    color: 'rgb(91, 192, 190)',
    position: 2,
  },
  {
    text: 'Edit Listing',
    color: 'rgb(91, 192, 190)',
    name: 'Edit Listing',
    position: 1,
  },
  {
    text: 'Review Generation',
    color: 'rgb(91, 192, 190)',
    name: 'Review Generation',
    position: 3,
  },
  {
    text: 'Create a Post',
    color: 'rgb(91, 192, 190)',
    name: 'Post',
    position: 4,
  },
];
const Dashboard: props => React$Node = props => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header
        leftIconName={'bars'}
        onLeftButtonPress={() => props.navigation.navigate('DrawerNavigation')}
        titleDropDown
        title="Roxberry Juice"
        TopNavigator
      />
      <FloatingAction
        color="rgb(91, 192, 190)"
        actions={actions}
        onPressItem={name => {
          alert(`selected button: ${name}`);
        }}
      />
    </SafeAreaView>
  );
};

export default Dashboard;
