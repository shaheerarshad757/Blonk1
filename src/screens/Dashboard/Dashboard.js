import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {BoxedCheckbox} from '@components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './Dashboard.style';

const Dashboard: (props) => React$Node = props => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('ResetPassword');
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Reset Navigation Check</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;
