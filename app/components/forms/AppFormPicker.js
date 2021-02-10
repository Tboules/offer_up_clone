import React from "react";

import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";
import { Button } from "react-native";

export default function AppFormPicker({ name, ...otherProps }) {
  const { setFieldValue, errors, values, touched } = useFormikContext();

  return (
    <>
      <AppPicker
        selected={values[name]}
        onSelect={(item) => setFieldValue(name, item)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
