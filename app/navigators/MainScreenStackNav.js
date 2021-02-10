import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import defaultStyles from "../styles";

//screens
import MainScreen from "../screens/MainScreen";
import ListingScreen from "../screens/ListingScreen";

const Stack = createStackNavigator();

export default function MainScreenStackNav() {
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
        name="Listings"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Listing Information" component={ListingScreen} />
    </Stack.Navigator>
  );
}
