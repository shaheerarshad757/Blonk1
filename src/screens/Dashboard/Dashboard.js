import React, { Component } from 'react';

import { StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native';

export default class Dashboard extends Component {

  constructor(props) {

    super(props);

    this.array = [{
      title: 'Java'
    },
    {
      title: 'React'
    },
    {
      title: 'Python'
    },
    {
      title: 'C++'
    },
    {
      title: 'Angular'
    }
    ],

      this.state = {

        arrayHolder: [],

        textInput_Holder: ''

      }

  }

  componentDidMount() {

    this.setState({ arrayHolder: [...this.array] })

  }


  joinData = () => {

    this.array.push({title : this.state.textInput_Holder});

    this.setState({ arrayHolder: [...this.array] })

  }
  gotoProfile = () => {

    this.props.navigation.navigate("Insights")

  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  GetItem(item) {

    Alert.alert(item);

  }


  render() {
    return (

      <View style={styles.MainContainer}>
      <TouchableOpacity onPress={this.gotoProfile} activeOpacity={0.7} style={styles.button} >

        <Text style={styles.buttonText}> View Profile </Text>

      </TouchableOpacity>

        <TextInput
          placeholder="Enter Here ..."
          onChangeText={data => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
        />

        <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >

          <Text style={styles.buttonText}> Add Jobs To List </Text>

        </TouchableOpacity>

        <FlatList

          data={this.state.arrayHolder}

          width='100%'

          extraData={this.state.arrayHolder}

          keyExtractor={(index) => index.toString()}

          ItemSeparatorComponent={this.FlatListItemSeparator}

          renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>}
        />


      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2,
    marginTop:50,

  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  textInputStyle: {

    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: 'rgb( 91 ,192, 190)',
    borderRadius: 7,
    marginTop: 12
  },

  button: {

    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: 'rgb( 91 ,192, 190)',
    borderRadius: 8,
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

});
