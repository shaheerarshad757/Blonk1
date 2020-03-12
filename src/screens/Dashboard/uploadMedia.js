import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SwitchSelector from 'react-native-switch-selector';
import {Header, Card} from '@components';

const UploadMedia: props => React$Node = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Upload Media'}
        leftLinkName={'Cancel'}
        RightLinkName={'Post'}
        onLeftLinkPress={() => {
          props.navigation.navigate('HomeStack');
        }}
      />
      <ScrollView contentContainerStyle={{marginBottom: 4}}>
        <Text>Upload Media</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default UploadMedia;
