import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  TopNavigator: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default styles;
