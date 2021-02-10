import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuthContext } from "../context/AuthContext";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

export default function TotalNav() {
  const { user } = useAuthContext();

  return (
    <View style={styles.cont}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});
