import React from "react";
import { Text } from "react-native";
import defaultStyles from "../styles";

export default function AppText({
  children,
  textColor,
  mb,
  bold,
  style,
  ...otherProps
}) {
  return (
    <Text
      style={[
        {
          ...defaultStyles.text,
          color: textColor ? textColor : "black",
          marginBottom: mb ? mb : 0,
          fontWeight: bold ? "bold" : "400",
        },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
}
