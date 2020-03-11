import React from 'react';
import {SafeAreaView, View, Text, ImageBackground} from 'react-native';

import styles from './Reviews.style';

const Reviews: props => React$Node = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1,alignItems:'flex-start'}}>
        <View style={{backgroundColor: 'yellow'}}>

        </View>
        <View style={{backgroundColor: 'blue'}}>
          <Text>Arsal Abdullah</Text>
        </View>
      </View>
      <View style={{flex: 8}}>
        <Text>assaasasscda</Text>
      </View>
    </SafeAreaView>
  );
};

export default Reviews;
