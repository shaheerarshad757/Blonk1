import React from 'react';
import {SafeAreaView, Text, ImageBackground} from 'react-native';

import styles from './Reviews.style';

const Reviews: props => React$Node = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Reviews Demo Screen</Text>
    </SafeAreaView>
  );
};

export default Reviews;
