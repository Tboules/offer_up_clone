import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustIcon from "../components/CustIcon";
import defaultStyles from "../styles";

//screens
import MainScreenStackNav from "../navigators/MainScreenStackNav";
import ListingPostScreen from "../screens/ListingPostScreen";
import AccountStackNav from "../navigators/AccountStackNav";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: defaultStyles.colors.primary,
        inactiveTintColor: defaultStyles.colors.medium,
        tabStyle: {
          height: 50,
        },
        style: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={MainScreenStackNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Post a Listing"
        component={ListingPostScreen}
        options={{
          tabBarButton: (props) => <NewListingButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
