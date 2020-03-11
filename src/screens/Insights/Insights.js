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
import {Header, Card} from '@components';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title="Roxberry Juice"
          titleDropDown
          leftIconName="bars"
          TopNavigator
        />
        <ScrollView>
          <Card style={styles.cardStyle}>
            <Image
              style={styles.coverImage}
              source={{
                uri:
                  'https://i.pinimg.com/originals/be/b9/58/beb958e56b3cb2ce745e880c9d482e04.jpg',
              }}
              resizeMode="center"
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

          <Card style={styles.cardStyle}>
            <Text style={styles.sectionHeading}>About</Text>
            <View style={styles.scheduleView}>
              <Icon
                name={'envelope'}
                size={15}
                color={'rgb( 20, 20, 20)'}
                style={styles.links}
              />
              <Text style={styles.schedule}>Sunday</Text>
              <Text style={styles.schedule}>8:00 a.m. - 10 p.m.</Text>
            </View>
            <View style={styles.week}>
              <View style={{flex: 1}}>
                <Text style={styles.schedule}>Monday</Text>
              </View>
              <View style={{flex: 1.35}}>
                <Text style={styles.schedule}>8:00 a.m. - 10 p.m.</Text>
              </View>
            </View>
            <View style={styles.week}>
              <View style={{flex: 1}}>
                <Text style={styles.schedule}>Tuesday</Text>
              </View>
              <View style={{flex: 1.35}}>
                <Text style={styles.schedule}>8:00 a.m. - 10 p.m.</Text>
              </View>
            </View>
            <View style={styles.week}>
              <View style={{flex: 1}}>
                <Text style={styles.schedule}>Wednesday</Text>
              </View>
              <View style={{flex: 1.35}}>
                <Text style={styles.schedule}>8:00 a.m. - 10 p.m.</Text>
              </View>
            </View>
            <View style={styles.week}>
              <View style={{flex: 1}}>
                <Text style={styles.schedule}>Thursday</Text>
              </View>
              <View style={{flex: 1.35}}>
                <Text style={styles.schedule}>8:00 a.m. - 10 p.m.</Text>
              </View>
            </View>
            <View style={styles.week}>
              <View style={{flex: 1}}>
                <Text style={styles.schedule}>Friday</Text>
              </View>
              <View style={{flex: 1.35}}>
                <Text style={styles.schedule}>8:00 a.m. - 10 p.m.</Text>
              </View>
            </View>
            <Text style={{textAlign: 'center', margin: 10, color: 'rgb(102,102,102)', fontWeight: '400'}}>Close on Bank Holidays</Text>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  coverImage: {
    backgroundColor: 'black',
    height: 200,
    borderRadius: 10,
  },
  container: {
    flex: 1,
  },
  profileImage: {
    height: 102,
    width: 102,
    borderRadius: 51,
    backgroundColor: 'white',
    top: 140,
    alignSelf: 'center',
    position: 'absolute',
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 50,
    alignItems: 'center',
  },
  cardStyle: {
    margin: 8,
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
  profileName: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  profileDesciption: {
    fontSize: 13,
    color: 'rgb(102,102,102)',
  },
  workDescription: {
    margin: 10,
    color: 'rgb(102,102,102)',
    fontSize: 13,
  },
  links: {
    marginLeft: 10,
  },
  linkAddress: {
    marginLeft: 10,
    color: 'rgb( 58, 129, 216)',
  },
  linkView: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    margin: 10,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 15,
  },
  schedule: {
    color: 'rgb(102,102,102)',
  },
  scheduleView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  week: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 130,
    marginTop: 5,
  },
});
