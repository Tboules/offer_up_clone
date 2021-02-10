import React from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImgAddButt from "./ImgAddButt";

export default function ImageInput({ imgUri, onImageRemove, onImageAdd }) {
  const imgDeleteAlert = () => {
    Alert.alert(
      "Delete this Image",
      "Are you sure you want to delete this image?",
      [
        {
          text: "Yes",
          onPress: () => onImageRemove(),
        },
        {
          text: "No",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View style={styles.cont}>
      {imgUri ? (
        <TouchableOpacity onPress={imgDeleteAlert}>
          <Image style={styles.img} source={{ uri: imgUri }} />
        </TouchableOpacity>
      ) : (
        <ImgAddButt onPress={onImageAdd} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
});
