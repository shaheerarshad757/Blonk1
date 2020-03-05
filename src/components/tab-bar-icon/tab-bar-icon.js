import React from 'react';
import {Image} from 'react-native';

const TabBarIcon: () => React$Node = props => {
  let iconPath;

  switch (props.name) {
    case 'dashboard':
      iconPath = props.focused ? require('../../assets/home_icon.png')
        : require('../../assets/home_icon.png');
      break;

    case 'universities':
      iconPath = props.focused ? require('../../assets/logo-sign-in.png')
        : require('../../assets/logo-sign-in.png');
      break;

    case 'profile':
      iconPath = props.focused   ? require('../../assets/logo-sign-in.png')
        : require('../../assets/logo-sign-in.png');
      break;

    case 'lists':
      iconPath = props.focused   ? require('../../assets/logo-sign-in.png')
        : require('../../assets/logo-sign-in.png');
      break;
  }

  return <Image source={iconPath} style={{width: 20, height: 20}}/>;
};

export {TabBarIcon};
