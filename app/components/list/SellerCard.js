import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import colors from "../../styles/colors";
import AppText from "../AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustIcon from "../CustIcon";

export default function SellerCard({
  imageLink,
  name,
  description,
  handlePress,
  renderRightActions,
  iconName,
  iconBgColor,
  showChev,
  mb,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={handlePress}>
        <View style={[styles.cont, { marginBottom: mb }]}>
          {imageLink ? (
            <Image source={imageLink} style={styles.image} />
          ) : (
            <CustIcon size={44} iconName={iconName} bgColor={iconBgColor} />
          )}
          <View style={styles.textCont}>
            <AppText numberOfLines={1} bold={true}>
              {name}
            </AppText>
            {description && (
              <AppText numberOfLines={1} textColor="gray">
                {description}
              </AppText>
            )}
          </View>
          {showChev && (
            <Icon name="chevron-right" size={30} color={colors.medium} />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    padding: 15,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginRight: 15,
  },
  textCont: {
    flex: 1,
  },
});
