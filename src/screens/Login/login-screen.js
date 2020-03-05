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

import styles from './login-screen.style';

const Login: props => React$Node = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.titleTopSpace} />
      <View style={styles.logo}>
        <Image
          resizeMode="contain"
          source={require('../../assets/logo-sign-in.png')}
        />
      </View>
      <View style={styles.titleBottomSpace} />
      <Text scale style={styles.slogan}>
        Control your online presence
      </Text>

      <View style={styles.formTopSpace} />

      <View style={styles.formContainer}>
        <TextInput style={styles.Field} placeholder="Email" />
        <TextInput
          style={styles.FieldPassword}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.checkbox}>
          <BoxedCheckbox
            label="Remember Me "
            isChecked={false}
            onToggle={() => {}}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Dashboard');
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ResetPassword');
          }}>
          <View style={{marginTop: 26}} />
          <Text style={styles.linkStyle}>Forgot Password ? </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
