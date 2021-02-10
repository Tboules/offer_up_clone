import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../styles/colors";

export default function CustIcon({ iconName, bgColor, size, style }) {
  const half = size / 2;

  return (
    <View
      style={[
        {
          ...styles.cont,
          backgroundColor: bgColor,
          width: size,
          height: size,
          borderRadius: half,
        },
        style,
      ]}
    >
      <Icon name={iconName} size={half} color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
