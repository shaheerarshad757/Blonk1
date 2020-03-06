import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './header.style';

const Header: props => React$Node = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {}}>
            <Icon
              name={'bars'}
              size={21}
              solid
              color={'rgb( 20, 20, 20)'}
              style={styles.options}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Roxberry Juice</Text>
          <TouchableOpacity>
            <Icon
              name={'sort-down'}
              size={21}
              solid
              color={'rgb( 20, 20, 20)'}
              style={styles.arrowDown}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.TopNavigator}>
          <View style={styles.headerButtons}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.headerButtonText}>OVERVIEW</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerButtonsSpace} />
          <View style={styles.headerButtons}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.headerButtonText}>DIRECTORIES</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.lineSeparator} />
      </View>
    </SafeAreaView>
  );
};

export {Header};
