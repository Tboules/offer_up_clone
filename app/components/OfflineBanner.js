import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import colors from "../styles/colors";

export default function OfflineBanner() {
  const netInfo = useNetInfo();

  if (netInfo.isInternetReachable === false && netInfo.type !== "unknown")
    return (
      <View style={styles.cont}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  cont: {
    height: 50,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});
