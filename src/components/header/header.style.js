import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 125,
  },
  options: {
    marginLeft: 20,
    marginTop: 10,
  },
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 99,
    marginTop: 10,
    fontSize: 18,
    letterSpacing: 1,
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
    marginTop: 15,
    flexDirection: 'row',
    flex: 1,
    //backgroundColor: 'green',
  },
  TopNavigator: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default styles;
