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
import {Header} from '@components';
import SwitchSelector from 'react-native-switch-selector';

const options = [
  {
    label: 'LIBRARY',
    value: '1',
  },
  {
    label: 'CAMERA',
    value: '2',
  },
];

const EditListing: props => React$Node = props => {
  const [dataSource] = useState(
    Array.apply(null, Array(16)).map((v, i) => {
      return {id: i, src: 'http://placehold.it/200x200?text=' + (i + 1)};
    }),
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Upload Media'}
        leftLinkName={'Cancel'}
        RightLinkName={'Post'}
        onLeftLinkPress={() => {
          props.navigation.navigate('HomeStack');
        }}
      />
      <ScrollView style={{backgroundColor:'white'}}>
        <Image
          style={styles.BusinessLogo}
          source={{
            uri:
              'https://i.pinimg.com/originals/be/b9/58/beb958e56b3cb2ce745e880c9d482e04.jpg',
          }}
          //resizeMode="center"
        />
        <FlatList
          data={dataSource}
          renderItem={({item}) => (
            <View style={styles.imageStyle}>
              <View style={{marginTop: 0}} />
              <Image style={styles.imageThumbnail} source={{uri: item.src}} />
            </View>
          )}
          //Setting the number of column
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.switchStyle}>
          <SwitchSelector
            options={options}
            initial={0}
            onPress={value => console.log(`Call onPress with value: ${value}`)}
            style={{}}
            selectedColor={'rgb(91, 192, 190)'}
            buttonColor={'rgb(255,255,255)'}
            selectedTextContainerStyle={styles.selectedButton}
          />
        </View>
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
    //paddingVertical: 10,
  },
  TopNavigator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    //backgroundColor: 'green'
  },
  headerButtons: {
    padding: 10,
    // flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderColor: 'rgb(91, 192, 190)',
  },
  headerButtonText: {
    fontSize: 14,
    color: 'rgb(91, 192, 190)',
  },
  headerButtonsSpace: {
    marginLeft: 20,
  },
  imageThumbnail: {
    //justifyContent: 'center',
    //alignItems: 'center',
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
    margin: 2,
    //marginHorizontal: 10,
  },
  BusinessLogo: {
    backgroundColor: 'black',
    height: 450,
    borderRadius: 4,
  },
  selectedButton: {
    borderColor: 'rgb(91, 192, 190)',
    borderBottomWidth: 2.5,
    // alignSelf: 'flex-end',
  },
  switchStyle: {
    marginTop: 14,
    marginHorizontal: 70,
    marginBottom: 20,
  },
});
export default EditListing;
