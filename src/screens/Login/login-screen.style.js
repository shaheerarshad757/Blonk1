import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  titleTopSpace: {
    height: 158,
  },
  titleBottomSpace: {
    height: 33,
  },
  breifingBottomSpace: {
    height: 15,
  },
  logo: {
    marginLeft: 60,
  },
  title: {
    fontSize: 110,
    letterSpacing: 3,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#666666',
  },
  slogan: {
    fontSize: 16,
    // fontFamily:'SF Pro Text Medium',
    textAlign: 'center',
    letterSpacing: 2,
    color: '#666666',
  },
  formTopSpace: {
    height: '5%',
  },
  formContainer: {
    alignItems: 'center',
  },
  Field: {
    height: 42,
    //width: 344,
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
  FieldPassword: {
    height: 42,
    //width: 344,
    width: screenWidth - 70,
    padding: 10,
    paddingLeft: 24,
    //marginBottom: 38,
    borderWidth: 0.3,
    borderRadius: 20,
    borderColor: 'rgb(170 ,169, 169)',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.45,
    shadowRadius: 1.5,
    elevation: 1,
  },
  checkbox: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 65,
    marginTop: 20,
    //backgroundColor: "black"
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
