import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
  AppFormImageList,
} from "../components/forms";
import * as Yup from "yup";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  images: Yup.array()
    .required()
    .min(2, "Must have at least one Image!")
    .label("Images"),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number()
    .required()
    .min(1, "Too low!")
    .max(10000, "Too High!")
    .label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string(),
});

const DATA = [
  { id: 1, label: "Furniture", iconName: "floor-lamp", iconColor: "#fc5c65" },
  { id: 2, label: "Cars", iconName: "car", iconColor: "#fd9644" },
  { id: 3, label: "Cameras", iconName: "camera", iconColor: "#fed330" },
  { id: 4, label: "Games", iconName: "cards", iconColor: "#26de81" },
  { id: 5, label: "Clothing", iconName: "shoe-heel", iconColor: "#2bcbba" },
  { id: 6, label: "Sports", iconName: "basketball", iconColor: "#45aaf2" },
  {
    id: 7,
    label: "Movies & Music",
    iconName: "headphones",
    iconColor: "#4b7bec",
  },
];

export default function ListingPostScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const handleSubmit = async (listing, formikBag) => {
    setProgress(0);
    setUploadVisible(true);
    const res = await listingsApi.postListing(listing, (progress) =>
      setProgress(progress)
    );

    if (!res.ok) {
      setUploadVisible(false);
      return alert("could not save the listing");
    }

    formikBag.resetForm();
  };

  return (
    <View style={styles.cont}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />

      <AppForm
        maxLength={255}
        initialValues={{
          images: [{ id: 100000, uri: null }],
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values, formikBag) =>
          handleSubmit({ ...values, location: { ...location } }, formikBag)
        }
        validationSchema={validationSchema}
        location={location}
      >
        <AppFormImageList name="images" />

        <AppFormField name="title" placeholder="Title" autoCorrect={false} />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          width="40%"
          maxLength={8}
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={DATA}
          width="60%"
        />
        <AppFormField
          maxLength={255}
          name="description"
          autoCorrect={true}
          placeholder="Description"
          multiline
          numberOfLines={2}
        />
        <SubmitButton label="POST" bgColor="primary" textColor="white" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
