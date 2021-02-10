import React from "react";
import * as ImagePicker from "expo-image-picker";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageList from "../ImageList/ImageList";

export default function AppFormImageList({ name }) {
  const { setFieldValue, errors, values, touched } = useFormikContext();
  const [count, setCount] = React.useState(1);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        setCount(count + 1);
        setFieldValue(name, [
          {
            id: count,
            uri: result.uri,
          },
          ...values[name],
        ]);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const handleRemove = (item) => {
    const newList = values[name].filter((obj) => obj.id !== item.id);
    setFieldValue(name, newList);
  };

  return (
    <>
      <ImageList
        imageUris={values[name]}
        onAddImage={selectImage}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
