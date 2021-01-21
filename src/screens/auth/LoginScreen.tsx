import React from "react";
import { StyleSheet, Image } from "react-native";
import { Screen } from "../../components/Screen";
import { AppTextInput } from "../../components/AppTextInput";
import { AppButton } from "../../components/AppButton";
// COMONENTS
import { ErrorMessage } from "../../components/ErrorMessage";
// FORMIK
import { Formik } from "formik";
// YUP
import * as Yup from "yup";

interface LoginScreenProps {}

// YUP VALIDATION SCHEMA
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  return (
    <Screen style={styles.containerStyle}>
      <Image
        source={require("../../../assets/logo-red.png")}
        style={styles.logoStyles}
      />
      {/* FORMIK */}
      <Formik
        // TEXTINPUT EMAIL AND PASSWORD
        initialValues={{ email: "", password: "" }}
        // YUP SCHEMA
        validationSchema={validationSchema}
        // SUBMIT BUTTON
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              icon='email'
              placeholder='Email'
              keyboardType='email-address'
              textContentType='emailAddress'
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              icon='lock'
              placeholder='Password'
              secureTextEntry={true}
              textContentType='password'
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppButton title='Login' onPress={handleSubmit} color='primary' />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
  },
  logoStyles: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
});
