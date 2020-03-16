import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {BoxedCheckbox} from '@components';

import styles from './login-screen.style';

const Login: props => React$Node = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={{flex: 0.5}}/>
        <View style={styles.logo}>
          <Image
            resizeMode="contain"
            source={require('../../assets/logo-sign-in.png')}
          />
        </View>
        <Text scale style={styles.slogan}>
          Control your online presence
        </Text>

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
            <View style={{marginTop: 0}} />
            <Text style={styles.linkStyle}>Forgot Password ? </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20,backgroundColor:'green'}}/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
