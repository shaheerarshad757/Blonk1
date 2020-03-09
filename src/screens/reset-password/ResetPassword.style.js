import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleTopSpace: {
    //flex: 1,
    height: '15%'
  },
  titleBottomSpace: {
    height: '3%',
    //backgroundColor: 'green',
  },
  logo: {
    marginLeft: screenWidth / 2 - 150,
  },
  options: {
    marginLeft: '4%',
    marginTop: '2%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  slogan: {
    fontSize: 16,
    // fontFamily:'SF Pro Text Medium',
    textAlign: 'center',
    letterSpacing: 2,
    color: '#666666',
  },
  formTopSpace: {
    height: '3%',
  },
  formContainer: {
    alignItems: 'center',
  },
  Field: {
    height: '20%',
    width: screenWidth - 70,
    padding: 10,
    paddingLeft: 24,
    marginBottom: 38,
    borderWidth: 0.3,
    borderRadius: 20,
    borderColor: 'rgb(170 ,169, 169)',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.45,
    shadowRadius: 1.5,
    elevation: 1,
  },
  button: {
    backgroundColor: 'rgb( 91 ,192, 190)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 29,
    width: screenWidth - 80,
    height: 50,
  },
  buttonText: {
    color: 'white',
    letterSpacing: 2.5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  linkStyle: {
    color: 'rgb( 91 ,192, 190)',
    fontSize: 16,
    letterSpacing: 2,
  },
});

export default styles;
