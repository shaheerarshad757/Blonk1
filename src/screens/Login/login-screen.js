import React, {useState} from 'react';
import {connect} from 'react-redux';
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
import {loginPressed} from '../../redux/actions';

import styles from './login-screen.style';

const Login: props => React$Node = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let params = {
    email: email,
    password: password,
  };

  // let value = props.obj;

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
              value={email}
              onChangeText={newEmail => setEmail(newEmail)}
            />
            <TextInput
              style={styles.FieldPassword}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={newPassword => setPassword(newPassword)}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity
            onPress={() => {
              // props.loginPressed(params);
              if(email.toLowerCase() == 'admin' && password.toLowerCase() == 'admin'){
              props.navigation.navigate('Dashboard');
            }
            else{
              alert("Email or Password Incorrect")

            }
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ResetPassword');
            }}>
            <Text style={styles.linkStyle}>New user ? Register yourself </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSpace} />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    credentials: state.credentialsReducer.credentials,
  };
};

const mapDispatchToProps = {
  loginPressed: loginPressed,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
