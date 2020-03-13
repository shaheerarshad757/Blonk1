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
import ActionButton from 'react-native-action-button';
import {Header, Card} from '@components';
import styles from './Insights.style';

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
            <View style={{flexDirection:'column'}}>
              <Icon
                name={'cross'}
                size={15}
                color={'rgb( 20, 20, 20)'}
                style={styles.crossImage}
              />
              <Image
                style={styles.coverImage}
                source={{
                  uri:
                    'https://i.pinimg.com/originals/be/b9/58/beb958e56b3cb2ce745e880c9d482e04.jpg',
              }}
              resizeMode="center"
            />
            </View>
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
            <View style={styles.weekDays}>
              <Text style={styles.schedule}>Monday</Text>

              <Text style={styles.schedule}>8:00 a..m. to 10:00 p.m.</Text>
            </View>
            <View style={styles.weekDays}>
              <Text style={styles.schedule}>Tuesday</Text>

              <Text style={styles.schedule}>8:00 a..m. to 10:00 p.m.</Text>
            </View>
            <View style={styles.weekDays}>
              <Text style={styles.schedule}>Wednesday</Text>

              <Text style={styles.schedule}>8:00 a..m. to 10:00 p.m.</Text>
            </View>
            <View style={styles.weekDays}>
              <Text style={styles.schedule}>Thursday</Text>

              <Text style={styles.schedule}>8:00 a..m. to 10:00 p.m.</Text>
            </View>
            <View style={styles.weekDays}>
              <Text style={styles.schedule}>Friday</Text>

              <Text style={styles.schedule}>8:00 a..m. to 10:00 p.m.</Text>
            </View>
            <View style={styles.weekDays}>
              <Text style={styles.schedule}>Saturday</Text>
              <Text style={styles.schedule}>8:00 a..m. to 10:00 p.m.</Text>
            </View>
            <Text style={styles.note}>Close on Bank Holidays</Text>
          </Card>
          <ActionButton buttonColor="rgb(91, 192, 190)" size={60} spacing={10}>
            <ActionButton.Item
              buttonColor="rgb(91, 192, 190)"
              title="Upload Media"
              size={50}
              onPress={() => props.navigation.navigate('UploadMedia')}>
              <Icon name="upload" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="rgb(91, 192, 190)"
              title="Edit Listing"
              size={50}
              onPress={() => props.navigation.navigate('EditListing')}>
              <Icon name="pen" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="rgb(91, 192, 190)"
              title="Review Generation"
              size={50}
              onPress={() => props.navigation.navigate('ReviewGeneration')}>
              <Icon name="paper-plane" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="rgb(91, 192, 190)"
              title="Create a Post"
              size={50}
              onPress={() => props.navigation.navigate('Post')}>
              <Icon name="edit" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
