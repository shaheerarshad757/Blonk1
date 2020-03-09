import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {Header} from '@components';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Roxberry Juice" titleDropDown leftIconName="bars" TopNavigator/>
        <View>
          <Image
            style={styles.header}
            source={{
              uri:
                'https://i.pinimg.com/originals/be/b9/58/beb958e56b3cb2ce745e880c9d482e04.jpg',
            }}
            resizeMode="center"
          />
        </View>
        <Image
          style={styles.avatar}
          source={require('../assets/logo-sign-in.png')}
          resizeMode="contain"
        />
        <ScrollView style={styles.descriptions}>
          <View style={{marginTop: 90, alignItems: 'center'}}/>
          <Text>JUMP</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: 200,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    // backgroundColor: 'green',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 270,
  },

  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  descriptions: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    //alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});
