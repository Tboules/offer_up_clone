import React from "react";

import LottieView from "lottie-react-native";

export default function CustActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      source={require("../styles/animations/loader.json")}
      loop
      autoPlay
    />
  );
}
