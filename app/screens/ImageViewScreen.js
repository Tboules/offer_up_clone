import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ImageViewScreen() {
  return (
    <View style={styles.cont}>
      <Icon style={styles.iconLeft} name="close" size={30} color="white" />
      <Icon
        style={styles.iconRight}
        name="trash-can-outline"
        size={30}
        color="white"
      />
      <Image style={styles.image} source={require("../images/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  iconLeft: {
    position: "absolute",
    top: 30,
    left: 30,
  },
  iconRight: {
    position: "absolute",
    top: 30,
    right: 30,
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    height: "77%",
    marginTop: 30,
  },
});
