import React, { useRef } from "react";

import { StyleSheet, FlatList, View } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageList({ imageUris, onAddImage, onRemoveImage }) {
  return (
    <View style={styles.cont}>
      <FlatList
        data={imageUris}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ImageInput
            imgUri={item.uri}
            onImageAdd={onAddImage}
            onImageRemove={() => onRemoveImage(item)}
          />
        )}
        horizontal
        scrollToEnd
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
  },
});

// const [imageList, setImageList] = useState([{ id: 0, uri: null }]);
// const [count, setCount] = useState(1);

// const selectImage = async () => {
//   try {
//     const result = await ImagePicker.launchImageLibraryAsync();
//     if (!result.cancelled) {
//       setCount(count + 1);
//       setImageList([
//         ...imageList,
//         {
//           id: count,
//           uri: result.uri,
//         },
//       ]);
//     }
//   } catch (error) {
//     console.log("Error reading an image", error);
//   }
// };

// const handleRemove = (item) => {
//   const newList = imageList.filter((obj) => obj.id !== item.id);
//   setImageList(newList);
// };
