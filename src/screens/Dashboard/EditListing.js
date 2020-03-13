import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SwitchSelector from 'react-native-switch-selector';
import {Header, Card} from '@components';

const EditListing: props => React$Node = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Edit Listing'}
        leftLinkName={'Cancel'}
        RightLinkName={'Save'}
        onLeftLinkPress={() => {
          props.navigation.navigate('HomeStack');
        }}
      />
      <ScrollView contentContainerStyle={{marginBottom: 4}}>
        <Card style={styles.cardStyle}>
          <Text style={styles.headings}>Business Overview</Text>
          <Text style={styles.headings}>Location Name</Text>
          <Text style={styles.placeHolders}>JJUMPP, LLC</Text>
          <View style={styles.line} />
          <View style={styles.headingNote}>
            <Text style={styles.headings}>Location Nickname</Text>
            <Text style={styles.note}> (for internal purposes only)</Text>
          </View>
          <Text style={styles.placeHolders}>JJUMPERS</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Categories</Text>
          <View style={styles.business}>
            <Text style={styles.note}>Business Name > </Text>
            <Text style={styles.note}>Business Name</Text>
            <Icon
              name={'trash'}
              size={18}
              style={styles.icon}
              color={'rgb(58, 129, 216)'}
            />
          </View>
          <View style={styles.business}>
            <Text style={styles.note}>Business Name > </Text>
            <Text style={styles.note}>Business Name</Text>
            <Icon
              name={'trash'}
              size={18}
              style={styles.icon}
              color={'rgb(58, 129, 216)'}
            />
          </View>
          <View style={styles.business}>
            <TextInput placeholder="Add a Category" style={styles.input} />
            <TouchableOpacity onPress={() => {}}>
              <Icon
                name={'sort-down'}
                size={20}
                solid
                color={'rgb( 20, 20, 20)'}
                style={styles.arrowDown}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <Text style={styles.headings}>Address</Text>
          <TextInput
            placeholder="Street Address Line 1"
            style={styles.inputAddress}
          />
          <TextInput
            placeholder="Street Address Line 2"
            style={styles.inputAddress}
          />
          <View style={styles.business}>
            <TextInput placeholder="City" style={styles.inputCity} />
            <View style={styles.state}>
              <TextInput placeholder="States" style={styles.inputStates} />
            </View>
            <TextInput placeholder="ZIP" style={styles.inputStates} />
          </View>
          <View style={styles.address}>
            <TextInput placeholder="Country" style={styles.input} />
            <TouchableOpacity onPress={() => {}}>
              <Icon
                name={'sort-down'}
                size={20}
                solid
                color={'rgb( 20, 20, 20)'}
                style={styles.arrowDown}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <Text style={styles.headings}>Map</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Business Phone</Text>
          <TextInput placeholder="800-555-5555" style={styles.inputAddress} />
          <View style={styles.line} />
          <Text style={styles.headings}>Featured Messages</Text>
          <TextInput placeholder="Message" style={styles.inputAddress} />
          <View style={styles.line} />
          <Text style={styles.headings}>Business Description</Text>
          <TextInput placeholder="Description" style={styles.inputAddress} />
          <View style={styles.line} />
          <Text style={styles.headings}>Business Hours</Text>
          
          <View style={styles.line} />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    margin: 4,
    marginLeft: 6,
    paddingVertical: 10,
  },
  headings: {
    marginTop: 10,
    fontWeight: '700',
    marginLeft: 20,
  },
  input: {
    marginLeft: 20,
    //marginBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    width: '85%',
    paddingBottom: 10,
    borderColor: 'rgb(170 ,169, 169)',
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    borderColor: 'rgb(241 ,241, 241)',
    marginTop: 10,
  },
  headingNote: {
    flexDirection: 'row',
    marginTop: 10,
  },
  note: {
    color: 'rgb(170 ,169, 169)',
    fontSize: 13,
    marginTop: 10,
  },
  business: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  icon: {
    marginLeft: '39%',
    marginTop: 10,
    justifyContent: 'flex-end',
  },
  arrowDown: {
    marginLeft: -10,
    marginTop: 4,
  },
  inputAddress: {
    marginLeft: 30,
    marginTop: 10,
    marginRight: 30,
    borderBottomWidth: 1,
    // width: '85%',
    flex:0.9,
    paddingBottom: 10,
    borderColor: 'rgb(170 ,169, 169)',
  },
  inputCity: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 20,
    borderBottomWidth: 1,
    // width: '85%',
    flex: 0.9,
    paddingBottom: 10,
    borderColor: 'rgb(170 ,169, 169)',
  },
  inputStates: {
    //marginLeft: 30,
    marginTop: 10,
    marginRight: 30,
    borderBottomWidth: 1,
    // width: '85%',
    flex:0.4,
    paddingBottom: 10,
    borderColor: 'rgb(170 ,169, 169)',
  },
  address: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  placeHolders: {
    marginLeft: 20,
    //marginBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    width: '85%',
    paddingBottom: 10,
    color: 'rgb(170 ,169, 169)',
  },
});
export default EditListing;
