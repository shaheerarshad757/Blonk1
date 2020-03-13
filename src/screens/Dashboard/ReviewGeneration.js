import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {Header, Card} from '@components';

const options = [
  {
    label: 'Text',
    value: '1',
  },
  {
    label: 'Email',
    value: '2',
  },
];
const platform = [
  {
    label: 'Google',
    value: '1',
  },
  {
    label: 'Facebook',
    value: '2',
  },
];
const message = [
  {
    label: 'Default',
    value: '1',
  },
  {
    label: 'Template',
    value: '2',
  },
  {
    label: 'Custom',
    value: '3',
  },
];

const ReviewGeneration: props => React$Node = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Review Generation'}
        leftLinkName={'Cancel'}
        RightLinkName={'Send'}
        onLeftLinkPress={() => {
          props.navigation.navigate('HomeStack');
        }}
      />
      <ScrollView contentContainerStyle={{marginBottom: 4}}>
        <Card style={styles.cardStyle}>
          <Text style={styles.headings}>Delivery Method</Text>
          <SwitchSelector
            options={options}
            initial={0}
            onPress={value => console.log(`Call onPress with value: ${value}`)}
            style={{margin: 20}}
            //backgroundColor= {'green'}
            selectedColor={'rgb(58,129,216)'}
            buttonColor={'rgb(255,255,255)'}
            selectedTextContainerStyle={styles.selectedButton}
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Text style={styles.headings}>Platform</Text>
          <SwitchSelector
            options={platform}
            initial={0}
            onPress={value => console.log(`Call onPress with value: ${value}`)}
            style={{margin: 20}}
            //backgroundColor= {'green'}
            selectedColor={'rgb(58,129,216)'}
            buttonColor={'rgb(255,255,255)'}
            selectedTextContainerStyle={styles.selectedButton}
          />
        </Card>
        <Card style={styles.cardFormStyle}>
          <Text style={styles.headings}>Recipietants</Text>
          <TextInput placeholder="First Name" style={styles.input} />
          <TextInput placeholder="Last Name" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <View style={{flex:1, alignItems:'center'}}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Add from Contacts</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View style={{marginTop: 20}} />
              <Text style={styles.linkStyle}>+ add another recipietant</Text>
            </TouchableOpacity>
          </View>
        </Card>
        <Card style={styles.cardStyle}>
          <Text style={styles.headings}>Message</Text>
          <SwitchSelector
            options={message}
            initial={0}
            onPress={value => console.log(`Call onPress with value: ${value}`)}
            style={{margin: 20}}
            selectedColor={'rgb(58,129,216)'}
            buttonColor={'rgb(255,255,255)'}
            selectedTextContainerStyle={styles.selectedButton}
          />
          <TextInput
            style={styles.message}
            multiline={true}
            numberOfLines={10}
            maxLength={1000}
            placeholder={
              'Dear [First Name], \nThank You for your valued business'
            }
          />
          <Card style={styles.cardStyle}>
            <Text style={styles.headings}>Preview</Text>
            <Text style={styles.messagePreview}>Thank you for Your Business</Text>
            <Text style={styles.messagePreview}>JJUMPERS</Text>

          </Card>
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
    marginLeft:6,
  },
  cardFormStyle: {
    margin: 4,
    padding: 10,
    marginLeft: 6,
    //alignItems:'center',
  },
  headings: {
    marginTop: 20,
    fontWeight: '700',
    marginLeft: 20,
    // marginBottom: 10,
  },
  selectedButton: {
    borderColor: 'white',
    borderWidth: 0.4,
    shadowColor: 'grey',
    //shadowOffset: {width: 1, height:1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderRadius: 20,
  },
  input: {
    marginLeft: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    width: '85%',
    paddingBottom: 5,
  },
  button: {
    backgroundColor: 'rgb( 58 ,129, 216)',
    alignItems: 'center',
    // justifyContent:'center',
    // alignContent:'center',
    borderRadius: 30,
    marginTop: 15,
    width: '70%',
    padding: 5,
    paddingHorizontal:20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    margin:5,
  },
  linkStyle: {
    color: 'rgb( 58 ,129, 216)',
    fontSize: 14,
    //letterSpacing: 2,
  },
  message: {
    padding: 10,
    borderWidth:1,
    marginHorizontal: 10,
    marginBottom: 15,
    borderColor:'rgb(170 ,169, 169)',
    height: 150,
    //textAlignVertical: 'top',
  },
  messagePreview: {
    textAlign:'center',
    fontSize: 16,
    letterSpacing: 0.2,
  },
});
export default ReviewGeneration;
