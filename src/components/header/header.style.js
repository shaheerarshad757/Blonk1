import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingTop: 27,
    shadowOpacity: 0.1,
    shadowOffset: {height: 4},
    backgroundColor: '#FFFFFF',
    elevation: 5,
    paddingBottom: 0.
    // flex: 10,
  },
  headerRow: {
    flexDirection: 'row',
  },
  options: {
    marginLeft: 14,
  },
  LeftLink: {
    marginLeft: 15,
    fontSize: 15,
    letterSpacing: 0.54,
    color: 'rgb(66,126,254)',
    textDecorationLine: 'underline',
  },
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -2,
    fontSize: 18,
    letterSpacing: 1.5,
    color: 'rgb( 20, 20, 20)',
    marginBottom: 20,
    // justifyContent:'flex-end'
    backgroundColor: 'green',
    // flex: 2,
    //s
  },
  RightLink: {
    marginLeft: 0,
    marginTop: 0,
    fontSize: 15,
    letterSpacing: 0.54,
    color: 'rgb(66,126,254)',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
  },
  arrowDown: {
    marginLeft: 15,
    marginTop: -2,
  },
  lineSeparator: {
    borderColor: 'rgb(170 ,169, 169)',
    borderWidth: 0.38,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 2,
    // backgroundColor: 'green',
    //elevation: 1,
    //marginTop: 10,
    flexDirection: 'row',
    // marginBottom: 20,
  },
  TopNavigator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    // backgroundColor: 'green'
  },
  headerButtons: {
    borderColor: 'rgb(91, 192, 190)',
    borderBottomWidth: 2,
    padding: 10,
    // flex: 1,
    justifyContent: 'center',
  },
  headerButtonText: {
    fontSize: 12,
    color: 'rgb(91, 192, 190)',
  },
  headerButtonsSpace: {
    marginLeft: 60,
  },
  selectedButton: {
    borderColor: 'rgb(91, 192, 190)',
    borderBottomWidth: 2.5,
    // alignSelf: 'flex-end',
  },
  switchStyle: {
    // marginTop: 14,
    // alignSelf: 'center',
    marginHorizontal: 70,
    // marginBottom: 20,
  },
});

export default styles;
