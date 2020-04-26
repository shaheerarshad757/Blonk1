import React, {useState} from 'react';
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
import {conncect} from 'react-redux';
import {emailChanged} from '../../redux/actions';
import DeviceInfo from "react-native-device-info";
import {BoxedCheckbox} from '@components';

import styles from './login-screen.style';

const Login: props => React$Node = props => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function submit(values) {
    const {emails, passwords} = values;

    const params = {
      user: {
        emails,
        passwords,
        // device_info: {
        //   deviceId: DeviceInfo.getUniqueId(),
        //   platform: Platform.OS,
        // },
      },
      // schoolApiAccessToken: school.access_token,
    };

    props.requestLogin(params);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
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
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <TextInput
              style={styles.Field}
              placeholder="Email"
              testID="email"
              value= {email}
              onChangeText={newEmail => setEmail(newEmail)}
            />
            <TextInput
              style={styles.FieldPassword}
              placeholder="Password"
              secureTextEntry
              value= {password}
              onChangeText={newPassword => setPassword(newPassword)}
            />
          </KeyboardAvoidingView>
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
            <Text style={styles.linkStyle}>Forgot Password ? </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSpace} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
