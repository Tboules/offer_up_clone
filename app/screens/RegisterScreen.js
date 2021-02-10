import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import * as Yup from "yup";
import authApi from "../api/auth";
import { useAuthContext } from "../context/AuthContext";
import colors from "../styles/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  const [registerError, setRegisterError] = React.useState({
    err: false,
    text: null,
  });
  const { login } = useAuthContext();

  const handleRegister = async (values) => {
    const res = await authApi.register(values);
    if (!res.ok) return setRegisterError({ err: true, text: res.data.error });
    setRegisterError({ err: false, text: null });

    const { data: authToken } = await authApi.login(
      res.data.email,
      res.data.password
    );

    login(authToken);
  };

  return (
    <SafeAreaView style={styles.cont}>
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        <ErrorMessage visible={registerError.err} error={registerError.text} />
        <AppFormField
          name="name"
          icon="account"
          placeholder="Name"
          autoCorrect={false}
        />
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          icon="lock"
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton label="REGISTER" bgColor="primary" textColor="white" />
      </AppForm>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
});
