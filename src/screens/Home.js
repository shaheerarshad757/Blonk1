import React from 'react';
import {SafeAreaView, View, Text, TextInput, StyleSheet} from 'react-native';
import {Header, Card} from '@components';

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Create Post'}
        leftLinkName={'Cancel'}
        RightLinkName={'Post'}
      />
      <View>
        <TextInput style={styles.postInput} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postInput: {
    //flex: 0.1,
    borderColor: 'gray',
    marginTop: -20,
    borderBottomWidth: 1,
    width: '100%',
    height: 370,
  },
});
export default About;
