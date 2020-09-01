import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Login} from '../Login/login-screen';
import {Card} from '@components';
import styles from './Insights.style';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
          <Text style={styles.options}> {'<<<'} Back </Text>
        </TouchableOpacity>
        <ScrollView>
          <Card style={styles.cardStyle}>
            <Image
              style={styles.coverImage}
              source={{
                uri:
                  'https://i.pinimg.com/originals/be/b9/58/beb958e56b3cb2ce745e880c9d482e04.jpg',
              }}
            />
            <Image
              style={styles.profileImage}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
              }}
              resizeMode="contain"
            />
            <View style={styles.description}>
              <Text style={styles.profileName}>J JUMP, LLC (JJUMPPERS)</Text>
              <Text style={styles.profileDesciption}>
                2500 Executive Pkwy #120
              </Text>
              <Text style={styles.profileDesciption}>
                Lehi, UT 84043 United States
              </Text>
              <Text style={styles.profileDesciption}>800-555-5555</Text>
              <Text style={styles.workDescription}>
                We are a Saas comapny that sells software for SMB. We believe in
                people and their dreams.
              </Text>
              <Text style={styles.workDescription}>
                "Software with a soul!"
              </Text>
              <View style={styles.linkView}>
                <Icon
                  name={'globe'}
                  size={15}
                  color={'rgb( 20, 20, 20)'}
                  style={styles.links}
                />
                <TouchableOpacity>
                  <Text style={styles.linkAddress}>www.website.com</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.linkView}>
                <Icon
                  name={'youtube'}
                  size={15}
                  color={'rgb( 20, 20, 20)'}
                  style={styles.links}
                />
                <TouchableOpacity>
                  <Text style={styles.linkAddress}>
                    www.youtube.com/user...
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.linkView}>
                <Icon
                  name={'envelope'}
                  size={15}
                  color={'rgb( 20, 20, 20)'}
                  style={styles.links}
                />
                <TouchableOpacity>
                  <Text style={styles.linkAddress}>email@email.com</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.linkView}>
                <Icon
                  name={'instagram'}
                  size={15}
                  color={'rgb( 20, 20, 20)'}
                  style={styles.links}
                />
                <TouchableOpacity>
                  <Text style={styles.linkAddress}>@username_</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
