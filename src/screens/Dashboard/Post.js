import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import SwitchSelector from 'react-native-switch-selector';
import {Header, CheckBox} from '@components';

const options = [
  {
    label: 'CANCEL',
    value: '1',
  },
  {
    label: 'SET SCHEDULE',
    value: '2',
  },
];
const Post: props => React$Node = props => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Create Post'}
        leftLinkName={'Cancel'}
        RightLinkName={'Post'}
        onLeftLinkPress={() => {
          props.navigation.navigate('HomeStack');
        }}
      />
      <ScrollView contentContainerStyle={{marginBottom: 4}}>
        <TextInput
          style={styles.postInput}
          multiline
          placeholder="What would you like to say?"
        />
        <TouchableOpacity>
          <View style={styles.shareView}>
            <Icon name={'share-alt'} size={23} style={styles.icon} />
            <Text style={styles.shareText}>Select Platform to share to</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.shareOptions}>
          <CheckBox />
          <Icon
            name={'facebook-square'}
            size={23}
            style={styles.icon}
            color={'rgb(0,50,140)'}
          />
          <Text style={styles.shareText}>Facebook</Text>
        </View>
        <View style={styles.shareOptions}>
          <CheckBox />
          <Icon
            name={'twitter-square'}
            size={23}
            style={styles.icon}
            color="skyblue"
          />
          <Text style={styles.shareText}>Twitter     </Text>
        </View>
        <View style={styles.shareOptions}>
          <CheckBox />
          <Icon
            name={'linkedin'}
            size={23}
            style={styles.icon}
            color={'rgb(0,100,140)'}
          />
          <Text style={styles.shareText}>LinkedIn   </Text>
        </View>
        <View style={styles.shareEnd} />
        <TouchableOpacity>
          <View style={styles.shareView}>
            <Icon name={'images'} size={23} style={styles.icon} />
            <Text style={styles.shareText}>Add Image/Video from media</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.shareView}>
            <Icon name={'camera'} size={23} style={styles.icon} />
            <Text style={styles.shareText}>
              Take Photo or Add from Camera Roll
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.shareView}>
            <Icon name={'link'} size={23} style={styles.icon} />
            <Text style={styles.shareText}>Shorten Link</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.shareView}>
            <Icon name={'calendar'} size={23} style={styles.icon} />
            <Text style={styles.shareText}>Schedule Post</Text>
          </View>
        </TouchableOpacity>
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
        />
        <View style={styles.switchStyle}>
          <SwitchSelector
            options={options}
            initial={0}
            onPress={value => console.log(`Call onPress with value: ${value}`)}
            style={{}}
            selectedColor={'rgb(58, 129, 216)'}
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
    backgroundColor: 'white',
  },
  postInput: {
    //flex: 0.1,
    borderColor: 'rgb(170 ,169, 169)',
    borderWidth: 0.38,
    borderBottomWidth: 1,
    //marginTop: 27,
    //flex:1,
    //width: '100%',
    height: 300,
    padding: 10,
  },
  shareView: {
    flexDirection: 'row',
    //marginLeft: 10,
    borderColor: 'rgb(170 ,169, 169)',
    borderWidth: 0.38,
    borderBottomWidth: 1,
    elevation: 1,
    marginTop: 0,
    padding: 15,
  },
  shareText: {
    fontSize: 15,
    color: 'rgb(102,102,102)',
    marginLeft: 10,
  },
  icon: {
    marginLeft: 10,
    marginTop: -1,
  },
  shareOptions: {
    flexDirection: 'row',
    marginTop: 10,
    flex: 0.2,
    justifyContent: 'center',
    //borderBottomWidth: 1,
    // backgroundColor: 'green',
    //alignItems: 'flex-end'
  },
  shareEnd: {
    borderColor: 'rgb(170 ,169, 169)',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  TopNavigator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    //backgroundColor: 'green'
  },
  selectedButton: {
    //borderColor: 'rgb(91, 192, 190)',
    //sborderBottomWidth: 2.5,
    // alignSelf: 'flex-end',
  },
  switchStyle: {
    marginTop: 14,
    marginHorizontal: 70,
    marginBottom: 10,
  },
});
export default Post;
