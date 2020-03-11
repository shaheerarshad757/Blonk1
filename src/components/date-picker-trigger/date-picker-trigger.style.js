import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 42,
    borderRadius: 8,
    borderColor: "#838E9B",
    borderWidth: 1,
  },
  dateContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  iconContainer: {
    paddingHorizontal: 22,
    backgroundColor: "#E6ECF2",
    justifyContent: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderLeftWidth: 1,
    borderColor: "#838E9B",
  },
});

export default styles;
