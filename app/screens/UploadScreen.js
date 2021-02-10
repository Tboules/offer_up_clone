import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import AppText from "../components/AppText";
import * as Progress from "react-native-progress";
import colors from "../styles/colors";
import LottieView from "lottie-react-native";

export default function UploadScreen({
  onDone,
  progress = 0,
  visible = false,
}) {
  return (
    <Modal visible={visible}>
      <View style={styles.cont}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            source={require("../styles/animations/done.json")}
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cont: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    width: 450,
  },
});
