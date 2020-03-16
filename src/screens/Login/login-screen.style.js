import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  titleTopSpace: {
    marginTop: 80,
  },
  logo: {
    alignSelf: 'center',
  },
  slogan: {
    fontSize: 16,
    // fontFamily:'SF Pro Text Medium',
    textAlign: 'center',
    letterSpacing: 2,
    color: 'rgb(170, 169, 169)',
    marginTop: '8%',
  },
  formContainer: {
    alignItems: 'center',
  },
  Field: {
    height: 42,
    width: screenWidth - 70,
    padding: 10,
    paddingLeft: 24,
    marginTop: '8%',
    borderWidth: 0.25,
    borderRadius: 40,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: 'white',
  },
  FieldPassword: {
    height: 42,
    width: screenWidth - 70,
    padding: 10,
    paddingLeft: 24,
    marginTop: '8%',
    borderWidth: 0.25,
    borderRadius: 40,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: 'white',
  },
  checkbox: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 61,
    marginTop: '3%',
    //backgroundColor: "black"
  },
  button: {
    backgroundColor: 'rgb( 91 ,192, 190)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 49,
    width: screenWidth - 60,
    height: 50,
    marginLeft: 9,
    marginTop: '2%',
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
    marginTop: '7%',
  },
});

export default styles;
