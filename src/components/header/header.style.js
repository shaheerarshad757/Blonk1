import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenWidth / 4 - 20,
    //backgroundColor: 'yellow',
  },
  options: {
    marginLeft: 20,
    marginTop: 10,
  },
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: screenWidth / 2 - 120,
    marginTop: 10,
    fontSize: 18,
    letterSpacing: 1.5,
    color: 'rgb( 20, 20, 20)',
  },
  arrowDown: {
    marginLeft: 15,
    marginTop: 8,
  },
  lineSeparator: {
    borderColor: 'rgb(170 ,169, 169)',
    borderWidth: 0.38,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 0,
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
    borderBottomWidth: 1,
    padding: 10,
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
