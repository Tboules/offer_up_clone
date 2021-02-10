import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import defaultStyles from "../../styles";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Permissions } from "react-native-unimodules";

export default function ImgAddButt({ onPress }) {
  const handlePress = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== "granted") {
      alert("please grant the camera permissions to the app");
    } else {
      onPress();
    }
  };

  return (
    <TouchableOpacity style={styles.iconCont} onPress={handlePress}>
      <Icon name="camera" size={30} color={defaultStyles.colors.medium} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconCont: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: defaultStyles.colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
