import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import defaultStyles from "../styles";

//screens
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: defaultStyles.colors.primary,
        },
        headerTintColor: defaultStyles.colors.light,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
