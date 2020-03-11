import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './header.style';

const Header: props => React$Node = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {props.leftIconName ? (
          <TouchableOpacity
            onPress={() =>
              props.onLeftButtonPress && props.onLeftButtonPress()
            }>
            <Icon
              name={props.leftIconName}
              size={21}
              color={'rgb( 20, 20, 20)'}
              style={styles.options}
            />
          </TouchableOpacity>
        ) : null}
        {props.leftLinkName ? (
          <TouchableOpacity
            onPress={() => props.onLeftLinkPress && props.onLeftLinkPress()}>
            <Text style={styles.LeftLink}>{props.leftLinkName}</Text>
          </TouchableOpacity>
        ) : null}

        {props.title ? (
          <Text style={styles.headerTitle}>{props.title}</Text>
        ) : null}
        {props.titleDropDown ? (
          <TouchableOpacity
            onPress={() =>
              props.onDropDownButtonPress && props.onDropDownButtonPress()
            }>
            <Icon
              name={'sort-down'}
              size={20}
              solid
              color={'rgb( 20, 20, 20)'}
              style={styles.arrowDown}
            />
          </TouchableOpacity>
        ) : null}
        {props.RightLinkName ? (
          <TouchableOpacity
            onPress={() => props.onRightLinkPress && props.onRightLinkPress()}>
            <Text style={styles.RightLink}>{props.RightLinkName}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      {props.TopNavigator ? (
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
      ) : (
        <View style={styles.lineSeparator1} />
      )}

      <View style={styles.lineSeparator} />

    </View>
  );
};

export {Header};
