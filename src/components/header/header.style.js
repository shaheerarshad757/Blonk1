import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    shadowOpacity: 0.1,
    shadowOffset: {height: 4},
    backgroundColor: '#FFFFFF',
    elevation: 5,
    paddingBottom: 0,
    //flex: 0.1,
  },
  headerRow: {
    flexDirection: 'row',
  },
  options: {
    marginLeft: 14,
  },
  LeftLink: {
    marginLeft: 15,
    //marginTop: 2,
    // flex: 1,
    fontSize: 15,
    letterSpacing: 0.54,
    color: 'rgb(66,126,254)',
    textDecorationLine: 'underline',
    //alignSelf:'flex-start',
  },
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    //marginLeft: screenWidth / 2 - 120,
    marginTop: -2,
    fontSize: 18,
    letterSpacing: 1.5,
    //flex: 1,
    color: 'rgb( 20, 20, 20)',
  },
  RightLink: {
    marginLeft: 0,
    marginTop: 0,
    //flex: 1,
    fontSize: 15,
    letterSpacing: 0.54,
    color: 'rgb(66,126,254)',
    textDecorationLine: 'underline',
    alignSelf:'flex-end',
  },
  arrowDown: {
    marginLeft: 15,
    marginTop: -2,
    //flex: 1,
  },
  lineSeparator: {
    borderColor: 'rgb(170 ,169, 169)',
    borderWidth: 0.38,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 2,
    //elevation: 1,
    marginTop: 0,
    flexDirection: 'row',
  },
  lineSeparator1: {
    borderColor: 'rgb(170 ,169, 169)',
    borderWidth: 0.38,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 10,
    flexDirection: 'row',
    //backgroundColor: 'yellow',
    //flex: 1,
    //backgroundColor: 'green',
  },
  TopNavigator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    //backgroundColor: 'green'
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
});

export default styles;
