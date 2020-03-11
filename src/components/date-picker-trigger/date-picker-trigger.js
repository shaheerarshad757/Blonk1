import React from "react";
import { TouchableOpacity, View , Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
//import { withTranslation } from "react-i18next";
//import { Text } from "../";
import styles from "./date-picker-trigger.style";

const DatePickerTrigger: () => React$Node = props => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
      >
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            Select Date
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon
            name="calendar-alt"
            color="#838E9B"
            size={18}
          />
        </View>
      </TouchableOpacity>
    );
  }

export { DatePickerTrigger };
