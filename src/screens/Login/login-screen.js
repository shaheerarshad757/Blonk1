import React, {useState, useEffect} from 'react';
// import {useSelector, useDispatch} from 'react-redux'
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
import loginPressed from '../../redux/actions';
import credentials from '../../redux/store/initial-state';

import styles from './login-screen.style';

const Login: props => React$Node = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let params = {
    email: email,
    password: password,
  };
  useEffect(() => {
    // setEmail(email), setPassword(password);
    // console.log(email, password);
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
              props.loginPressed(params);
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

export default connect(
  mapStateToProps,
  {loginPressed},
)(Login);
