import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../styles/colors";

export default function CustButton({ children, bgColor, mb, onPress, style }) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: bgColor,
        marginBottom: mb ? mb : 0,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 55,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
});
