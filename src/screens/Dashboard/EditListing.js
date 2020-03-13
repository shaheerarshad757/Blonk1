import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import FastImage from 'react-native-fast-image';
import {Header, Card} from '@components';

const EditListing: props => React$Node = props => {
  const [dataSource] = useState(
    Array.apply(null, Array(12)).map((v, i) => {
      return {id: i, src: 'http://placehold.it/200x200?text=' + (i + 1)};
    }),
  );
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
          <Text style={[styles.note,{marginLeft: 30}]}>Closed/Open</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Additional Hours</Text>
          <TextInput
            placeholder="Close on bank holidays"
            style={styles.inputAddress}
          />
          <View style={styles.line} />
          <Text style={styles.headings}>Website</Text>
          <TextInput placeholder="800-555-5555" style={styles.inputAddress} />
          <View style={styles.line} />
          <Text style={styles.headings}>Email</Text>
          <TextInput placeholder="800-555-5555" style={styles.inputAddress} />
          <View style={styles.line} />
        </Card>
        <Card style={styles.cardStyle}>
          <Text style={styles.headings}>Photos</Text>
          <Text style={styles.headings}>Business Logo</Text>
          <Icon
            name={'times-circle'}
            size={15}
            color={'rgb(170 ,169, 169)'}
            style={styles.crossIcon}
            solid
          />
          <Image
            style={styles.BusinessLogo}
            source={{
              uri:
                'https://i.pinimg.com/originals/be/b9/58/beb958e56b3cb2ce745e880c9d482e04.jpg',
            }}
            //resizeMode="center"
          />
          <View style={styles.line} />
          <Text style={styles.headings}>Cover Photo</Text>
          <Icon
            name={'times-circle'}
            size={15}
            color={'rgb(170 ,169, 169)'}
            style={styles.crossIcon}
            solid
          />
          <Image
            style={styles.coverImage}
            source={{
              uri:
                'https://i.pinimg.com/originals/be/b9/58/beb958e56b3cb2ce745e880c9d482e04.jpg',
            }}
            resizeMode="center"
          />
          <View style={styles.line} />
          <Text style={styles.headings}>Additional Photos</Text>
          <FlatList
            data={dataSource}
            renderItem={({item}) => (
              <View style={styles.imageStyle}>
                <Icon
                  name={'times-circle'}
                  size={15}
                  color={'rgb(170 ,169, 169)'}
                  style={styles.crossPhotos}
                  solid
                />
                <Image style={styles.imageThumbnail} source={{uri: item.src}} />
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Text style={styles.headings}>Additional Information</Text>
          <Text style={styles.headings}>Keywords</Text>
          <Text style={styles.placeHolders}>JJUMPP, LLC</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Products</Text>
          <Text style={styles.placeHolders}>JJUMPPERS</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Services</Text>
          <Text style={styles.placeHolders}>SaaS</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Specialities</Text>
          <Text style={styles.placeHolders}>Software</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Associations</Text>
          <Text style={styles.placeHolders}>None</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Brands</Text>
          <Text style={styles.placeHolders}>Stuff goes here</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Languages</Text>
          <Text style={styles.placeHolders}>Description</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Year Established</Text>
          <Text style={styles.placeHolders}>12/2001</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Payment Methods</Text>
          <Text style={styles.placeHolders}>Visa</Text>
          <Text style={styles.placeHolders}>Mastercard</Text>
          <Text style={styles.placeHolders}>American Express</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Instagram URL</Text>
          <Text style={styles.placeHolders}>URL GOES HERE</Text>
          <View style={styles.line} />
          <Text style={styles.headings}>Youtube URL</Text>
          <Text style={styles.placeHolders}>URL GOES HERE</Text>
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
    //paddingBottom: 10,
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
    flex: 0.9,
    //paddingBottom: 10,
    borderColor: 'rgb(170 ,169, 169)',
  },
  inputCity: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 20,
    borderBottomWidth: 1,
    // width: '85%',
    flex: 0.9,
    //paddingBottom: 10,
    borderColor: 'rgb(170 ,169, 169)',
  },
  inputStates: {
    //marginLeft: 30,
    marginTop: 10,
    marginRight: 30,
    borderBottomWidth: 1,
    // width: '85%',
    flex: 0.4,
    //paddingBottom: 10,
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
    //paddingBottom: 10,
    color: 'rgb(170 ,169, 169)',
  },
  coverImage: {
    backgroundColor: 'black',
    height: 150,
    borderRadius: 4,
    marginHorizontal: 20,
  },
  BusinessLogo: {
    backgroundColor: 'black',
    height: 300,
    borderRadius: 4,
    marginHorizontal: 20,
  },
  crossIcon: {
    marginLeft: 14,
    marginTop: 10,
    marginBottom: -4,
    //backgroundColor: 'rgb(170 ,169, 169)',
    alignSelf: 'flex-start',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  crossPhotos: {
    //marginLeft: 14,
    marginTop: 10,
    marginBottom: -1,
  },
  imageStyle: {
    flex: 1,
    //flexDirection: 'column',
    marginLeft: 20,
    //marginHorizontal: 10,
  },
});
export default EditListing;
