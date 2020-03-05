import React from 'react';
import {Image} from 'react-native';

const TabBarIcon: () => React$Node = props => {
  let iconPath;

  switch (props.name) {
    case 'dashboard':
      iconPath = props.focused ? require('../../assets/home_icon.png')
        : require('../../assets/home_icon.png');
      break;

    case 'insights':
      iconPath = props.focused ? require('../../assets/settings_icon.png')
        : require('../../assets/settings_icon.png');
      break;

    case 'reviews':
      iconPath = props.focused   ? require('../../assets/settings_icon.png')
        : require('../../assets/settings_icon.png');
      break;

    case 'social':
      iconPath = props.focused   ? require('../../assets/home_icon.png')
        : require('../../assets/home_icon.png');
      break;
  }

  return <Image source={iconPath} style={{width: 20, height: 20}}/>;
};

export {TabBarIcon};
