import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ListItemSeperator from "../components/list/ListItemSeperator";
import SellerCard from "../components/list/SellerCard";
import defaultStyles from "../styles";
import { useAuthContext } from "../context/AuthContext";

const DATA = [
  {
    icon: "format-list-bulleted",
    iconColor: defaultStyles.colors.primary,
    name: "My Listings",
  },
  {
    icon: "email",
    iconColor: defaultStyles.colors.secondary,
    name: "My Messages",
    nav: "My Messages",
    mb: 20,
  },
  {
    icon: "logout",
    iconColor: defaultStyles.colors.yellow,
    name: "Log Out",
    logOut: true,
  },
];

export default function AccountScreen({ navigation }) {
  const { user, logOut } = useAuthContext();
  const handleNavigation = (item) => {
    if (item.nav) {
      navigation.navigate(item.nav);
    }
    if (item.logOut) {
      logOut();
    }
  };

  return (
    <SafeAreaView style={styles.cont}>
      <View style={styles.header}>
        <SellerCard
          imageLink={require("../images/mosh.jpg")}
          name={user.name}
          description={user.email}
        />
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <SellerCard
            name={item.name}
            iconName={item.icon}
            iconBgColor={item.iconColor}
            mb={item.mb}
            handlePress={() => handleNavigation(item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: defaultStyles.colors.light,
  },
  header: {
    marginBottom: 40,
  },
});
