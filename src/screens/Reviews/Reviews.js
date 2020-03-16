import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import ActionButton from 'react-native-action-button';


import styles from './Reviews.style';

const Reviews: props => React$Node = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Reviews Demo Tab</Text>
    </SafeAreaView>
  );
};

export default Reviews;

// <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
//   <Text>Monday</Text>
//   <View style={{flex:0.1}}/>
//   <Text>8:00 a..m. to 10:00 p.m.</Text>
// </View>
// <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
//   <Text>Tuesday</Text>
//   <View style={{flex:0.1}}/>
//   <Text>8:00 a..m. to 10:00 p.m.</Text>
// </View>
// <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
//   <Text>Wednesday</Text>
//   <View style={{flex:0.1}}/>
//   <Text>8:00 a..m. to 10:00 p.m.</Text>
// </View>
// <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
//   <Text>Thursday</Text>
//   <View style={{flex:0.1}}/>
//   <Text>8:00 a..m. to 10:00 p.m.</Text>
// </View>
// <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
//   <Text>Friday</Text>
//   <View style={{flex:0.1}}/>
//   <Text>8:00 a..m. to 10:00 p.m.</Text>
// </View>
// <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
//   <Text>Saturday</Text>
//   <View style={{flex:0.1}}/>
//   <Text>8:00 a..m. to 10:00 p.m.</Text>
// </View>


////////
// <View style={styles.week}>
//   <View style={{flex: 1}}>
//     <Text style={styles.schedule}>Monday</Text>
//   </View>
//   <View style={{flex: 1.35}}>
//     <Text style={styles.schedule}>8:00 a.m. - 10 p.m.</Text>
//   </View>
// </View>
// <View style={styles.week}>
//   <View style={{flex: 1}}>
//     <Text style={styles.schedule}>Tuesday</Text>
//   </View>
//   <View style={{flex: 1.35}}>
//     <Text style={styles.schedule}>8:00 a.m. - 10 p.m.</Text>
//   </View>
// </View>
// <View style={styles.week}>
//   <View style={{flex: 1}}>
//     <Text style={styles.schedule}>Wednesday</Text>
//   </View>
//   <View style={{flex: 1.35}}>
//     <Text style={styles.schedule}>8:00 a.m. - 10 p.m.</Text>
//   </View>
// </View>
// <View style={styles.week}>
//   <View style={{flex: 1}}>
//     <Text style={styles.schedule}>Thursday</Text>
//   </View>
//   <View style={{flex: 1.35}}>
//     <Text style={styles.schedule}>8:00 a.m. - 10 p.m.</Text>
//   </View>
// </View>
// <View style={styles.week}>
//   <View style={{flex: 1}}>
//     <Text style={styles.schedule}>Friday</Text>
//   </View>
//   <View style={{flex: 1.35}}>
//     <Text style={styles.schedule}>8:00 a.m. - 10 p.m.</Text>
//   </View>
// </View>
