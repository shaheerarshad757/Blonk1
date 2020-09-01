import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {BoxedCheckbox} from '@components';

import styles from './ResetPassword.style';

const ResetPassword: () => React$Node = props => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.options}> {'<'} Back </Text>
      </TouchableOpacity>
      <View style={styles.titleTopSpace} />
      <View style={styles.logo}>
        <Image
          resizeMode="contain"
          source={require('../../assets/logo-sign-in.png')}
        />
      </View>
      <View style={styles.titleBottomSpace} />
      <Text scale style={styles.slogan}>
        Control your online presence online
      </Text>

      <View style={styles.formTopSpace} />

      <View style={styles.formContainer}>
        <TextInput style={styles.Field} placeholder="User Name"/>
        <TextInput style={styles.Field} placeholder="Email" />
        <TextInput style={styles.Field} placeholder="Password" />

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
