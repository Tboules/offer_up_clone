import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import defaultStyles from "../styles";

export default function AppTextInput({ icon, width, ...props }) {
  return (
    <View style={{ ...styles.cont, width: width }}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, { flex: 1 }]}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: defaultStyles.colors.white,
    width: "100%",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 6,
  },
});
