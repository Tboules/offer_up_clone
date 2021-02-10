import React from "react";
import { useFormikContext } from "formik";
import defaultStyles from "../../styles";

import CustButton from "../CustButton";
import AppText from "../AppText";

export default function SubmitButton({ label, bgColor, textColor }) {
  const { handleSubmit } = useFormikContext();

  return (
    <>
      <CustButton
        bgColor={defaultStyles.colors[bgColor]}
        onPress={handleSubmit}
      >
        <AppText textColor={defaultStyles.colors[textColor]}>{label}</AppText>
      </CustButton>
    </>
  );
}
