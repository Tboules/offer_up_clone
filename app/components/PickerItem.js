import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import CustIcon from "./CustIcon";

export default function PickerItem({ label, onPress, iconName, iconColor }) {
  return (
    <TouchableOpacity style={styles.itemCont} onPress={onPress}>
      <CustIcon size={70} iconName={iconName} bgColor={iconColor} />
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
  },
  itemCont: {
    flexBasis: "33.3333%",
    padding: 10,
    alignItems: "center",
  },
});
