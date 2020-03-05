import React from 'react';
import {SafeAreaView, Text, ImageBackground} from 'react-native';

import styles from './Insights.style';

const Insights: props => React$Node = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Insights Demo Screen</Text>
    </SafeAreaView>
  );
};

export default Insights;
