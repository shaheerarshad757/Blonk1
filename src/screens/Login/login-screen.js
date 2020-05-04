import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
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
import DeviceInfo from 'react-native-device-info';
import {BoxedCheckbox} from '@components';
import loginPressed from '../../redux//actions';
import credentials from '../../redux/store/initial-state';

import styles from './login-screen.style';

const Login: props => React$Node = props => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  // const newEmail = useSelector(state => state.email)
  //as you refered the user at the reducer
  useEffect(() => {
    setEmail(email), setPassword(password);
    console.log(email, password);
  }, [email, password]);

  // const dispatch = useDispatch()
  // loginPressed = email,password => {
  //   dispatch(addItem(value))
  // }


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
              props.loginPressed(email, password);
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
  return{
    email: state.email,
    password: state.password,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginPressed: () => dispatch(loginPressed())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
// export default Login;
