import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Header} from '@components';

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Upload Media'}
        leftLinkName={'Cancel'}
        RightLinkName={'Select'}
      />
      <View style={styles.TopNavigator}>
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerButtonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerButtonsSpace} />
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerButtonText}>SCHEDULE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center"
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
  },
  headerButtonText: {
    fontSize: 14,
    color: 'rgb(91, 192, 190)',
  },
  headerButtonsSpace: {
    marginLeft: 20,
  },
});
export default About;
