import React from "react";
import { TouchableOpacity, View , Text} from "react-native";
import { CheckBox} from "../";
import styles from "./boxed-checkbox.style";

const BoxedCheckbox: () => React$Node = props => {
  return (
    <TouchableOpacity onPress={() => props.onToggle && props.onToggle()} style={styles.container}>
      <View style={styles.contentContainer}>
        <CheckBox
          isChecked={props.isChecked}
          onToggle={() =>
            props.onToggle && props.onToggle()
          }
        />

        <Text scale style={styles.label}>
          {props.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { BoxedCheckbox };
