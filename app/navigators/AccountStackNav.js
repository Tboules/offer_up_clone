import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import defaultStyles from "../styles";

//screens
import AccountScreen from "../screens/AccountScreen";
import MessageList from "../screens/MessageList";

const Stack = createStackNavigator();

export default function AccountStackNav() {
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
        name="Account Screen"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="My Messages" component={MessageList} />
    </Stack.Navigator>
  );
}
