import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
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
  useEffect(() => {
    // axios
    //   .post('https://api.staging.jumpsoftware.com/v1/signin', {
    //     email: email,
    //     password: password,
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //     console.log(email);
    //     console.log(password);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }, [email, password]);

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
          <View style={styles.checkbox}>
            <BoxedCheckbox
              label="Remember Me "
              isChecked={false}
              onToggle={() => {}}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              axios
                .post('https://api.staging.jumpsoftware.com/v1/signin', {
                  email: 'developerm216@gmail.com',
                  password: 'Jump123456',
                })
                .then(function(response) {
                  console.log(response);
                  console.log(email);
                  console.log(password);
                })
                .catch(function(error) {
                  console.log(error);
                });
              // props.loginPressed(params);
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
