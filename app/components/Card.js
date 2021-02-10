import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../styles/colors";
import AppText from "./AppText";
import FastImage from "react-native-fast-image";

export default function Card({ title, subTitle, imageLink, onPress, noBR }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.cardCont, { borderRadius: noBR ? 0 : 20 }]}>
        <FastImage source={{ uri: imageLink }} style={styles.image} />
        <View style={styles.textCont}>
          <AppText mb={10}>{title}</AppText>
          <AppText textColor={colors.secondary}> ${subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardCont: {
    width: "100%",
    height: 280,
    backgroundColor: "#fff",

    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    flex: 2,
  },
  textCont: {
    padding: 20,
  },
});
