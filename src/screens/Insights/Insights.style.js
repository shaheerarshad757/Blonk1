import {StyleSheet, Dimensions} from 'react-native';
//const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    backgroundColor: 'black',
    height: 200,
    borderRadius: 10,
  },
  profileImage: {
    height: 102,
    width: 102,
    borderRadius: 51,
    backgroundColor: 'white',
    top: 140,
    alignSelf: 'center',
    position: 'absolute',
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 50,
    alignItems: 'center',
  },
  cardStyle: {
    margin: 8,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  profileDesciption: {
    fontSize: 13,
    color: 'rgb(102,102,102)',
  },
  workDescription: {
    margin: 10,
    color: 'rgb(102,102,102)',
    fontSize: 13,
  },
  links: {
    marginLeft: 10,
  },
  linkAddress: {
    marginLeft: 10,
    color: 'rgb( 58, 129, 216)',
  },
  linkView: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    margin: 10,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 15,
    margin: 5,
  },
  schedule: {
    color: 'rgb(102,102,102)',
  },
  scheduleView: {
    flexDirection: 'row',
    //flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  week: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 130,
    marginTop: 5,
  },
  weekDays: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginLeft: 110,
  },
  note: {
    textAlign: 'center',
    margin: 10,
    color: 'rgb(102,102,102)',
    fontStyle: 'italic',
  },
});

export default styles;
