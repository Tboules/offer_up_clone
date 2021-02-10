import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../styles/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cont}>
        <Icon name="plus-circle" size={35} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cont: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    bottom: 20,
    borderWidth: 5,
    borderColor: colors.white,
  },
});
