import React from 'react';
// import {Platform} from 'react-native';
import 'react-native-gesture-handler';
import RootStack from '../src/screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {connect} from 'react-redux';
//import NavigationService from '@navigation/navigation-service';
// import KeyboardManager from 'react-native-keyboard-manager';
//
// if (Platform.OS === "ios") {
//   KeyboardManager.setKeyboardDistanceFromTextField(65);
// }
//App CODE COPIED FROM CIALFO
const App: () => React$Node = () => {
  return (
    <SafeAreaProvider>
      <RootStack />
    </SafeAreaProvider>
  );
};

// function mapStateToProps(state) {
//   // const {
//   //   session: {user},
//   // } = state;
//   // let inboxChannel = user ? user.mobile_notification_channel : null;
//
//   return {
//     // inboxChannel,
//     // session: state.session,
//   };
// }
//
// const mapDispatchToProps = {
//   // addConversationMessage: InboxCreators.addConversationMessage,
//   // liveMessageReceived: InboxCreators.liveMessageReceived,
//   // checkVersion: VersionCreators.checkVersion,
// };

export default App;
