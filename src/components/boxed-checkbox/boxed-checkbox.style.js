import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    //width: screenWidth - 90,
    height: screenWidth / 6 - 10,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  label: {
    marginLeft: 10,
    color: '#7E8E9D',
    fontSize: 16,
  },
});

export default styles;
