import React from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import authApi from "../api/auth";
import * as Yup from "yup";
import { useAuthContext } from "../context/AuthContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  const [loginError, setLoginError] = React.useState(false);
  const { login } = useAuthContext();

  const handleSubmit = async ({ email, password }) => {
    const res = await authApi.login(email, password);
    if (!res.ok) return setLoginError(true);
    setLoginError(false);
    login(res.data);
  };

  return (
    <SafeAreaView style={styles.cont}>
      <Image style={styles.logo} source={require("../images/logo-red.png")} />

      <AppForm
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginError}
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
        <SubmitButton label="LOGIN" bgColor="primary" textColor="white" />
      </AppForm>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    padding: 15,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
