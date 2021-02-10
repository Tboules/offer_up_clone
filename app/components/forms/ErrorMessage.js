import React from "react";
import { View } from "react-native";
import AppText from "../AppText";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return (
    <View>
      <AppText textColor="red">{error}</AppText>
    </View>
  );
}
