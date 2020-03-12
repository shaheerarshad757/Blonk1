import React from 'react';
import {SafeAreaView} from 'react-native';
import {Header,FloatingButton} from '@components';
//import {FloatingAction} from 'react-native-floating-action';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome5';
//import Post from './Post';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './Dashboard.style';

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
      <ActionButton buttonColor="rgb(91, 192, 190)" size={60} spacing={10}>
        <ActionButton.Item
          buttonColor="rgb(91, 192, 190)"
          title="Upload Media"
          size={50}
          onPress={() => {}}>
          <Icon name="upload" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="rgb(91, 192, 190)"
          title="Edit Listing"
          size={50}
          onPress={() => props.navigation.navigate('EditListing')}>
          <Icon name="pen" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="rgb(91, 192, 190)"
          title="Review Generation"
          size={50}
          onPress={() => props.navigation.navigate('ReviewGeneration')}>
          <Icon name="paper-plane" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="rgb(91, 192, 190)"
          title="Create a Post"
          size={50}
          onPress={() => props.navigation.navigate('Post')}>
          <Icon name="edit" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </SafeAreaView>
  );
};

export default Dashboard;
