import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './header.style';

const options = [
  {
    label: 'OVERVIEW',
    value: '1',
  },
  {
    label: 'DIRECTORIES',
    value: '2',
  },
];

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

        <View style={{flex:0.5}}/>
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
        <View style={{flex:0.4}} />

        {props.RightLinkName ? (
          <TouchableOpacity
            onPress={() => props.onRightLinkPress && props.onRightLinkPress()}>
            <Text style={styles.RightLink}>{props.RightLinkName}</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {props.TopNavigator ? (
        <View style={styles.switchStyle}>
          <SwitchSelector
            options={options}
            initial={0}
            onPress={value => console.log(`Call onPress with value: ${value}`)}
            style={{}}
            selectedColor={'rgb(91, 192, 190)'}
            buttonColor={'rgb(255,255,255)'}
            selectedTextContainerStyle={styles.selectedButton}
          />
        </View>
      ) : null}

      <View style={styles.lineSeparator} />
    </View>
  );
};

export {Header};
