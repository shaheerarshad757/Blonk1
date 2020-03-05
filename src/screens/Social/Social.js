import React from 'react';
import {SafeAreaView, Text, ImageBackground} from 'react-native';

import styles from './Social.style';

const Social: props => React$Node = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Social Demo Screen</Text>
    </SafeAreaView>
  );
};

export default Social;
