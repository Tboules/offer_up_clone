import React from "react";

import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({ name, ...otherProps }) {
  const {
    handleChange,
    setFieldTouched,
    errors,
    touched,
    setFieldValue,
    values,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
