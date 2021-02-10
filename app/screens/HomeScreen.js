import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import AppText from "../components/AppText";
import CustButton from "../components/CustButton";

import background from "../images/background.jpg";
import logo from "../images/logo-red.png";
import colors from "../styles/colors";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.cont}>
      <ImageBackground
        blurRadius={1.4}
        source={background}
        style={styles.bgImage}
      />
      <View style={styles.logoCont}>
        <Image source={logo} style={styles.logoImage} />
        <AppText>Sell What You Don't Need</AppText>
      </View>
      <View style={styles.buttons}>
        <CustButton
          bgColor={colors.primary}
          mb={14}
          onPress={() => navigation.navigate("Login")}
        >
          <AppText textColor="white">LOGIN</AppText>
        </CustButton>
        <CustButton
          bgColor={colors.secondary}
          onPress={() => navigation.navigate("Register")}
        >
          <AppText textColor="white">REGISTER</AppText>
        </CustButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    width: "100%",
    height: "100%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  buttons: {
    position: "absolute",
    bottom: 30,
    height: "20%",
    width: " 90%",
    alignSelf: "center",
  },
  logoCont: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: "auto",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
});
