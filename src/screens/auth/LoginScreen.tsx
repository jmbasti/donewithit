import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";
import { Screen } from "../../components/Screen";
import { AppButton } from "../../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// CONFIG
import colors from "../../config/colors";

// FORMIK
import { useFormik } from "formik";

// YUP
import * as Yup from "yup";

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  // FORMIK
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // YUP VALIDATION SCHEMA
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter valid email")
        .required("Email Address is required"),
      password: Yup.string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Screen style={styles.containerStyle}>
      <Image
        source={require("../../../assets/logo-red.png")}
        style={styles.logoStyles}
      />
      <View style={styles.inputContainerStyle}>
        <MaterialCommunityIcons
          name='email'
          size={20}
          color={colors.medium}
          style={styles.iconStyle}
        />

        <TextInput
          style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
          placeholder='Email'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
      </View>
      {formik.errors.email && formik.touched.email && (
        <Text style={{ color: "red" }}>{formik.errors.email}</Text>
      )}
      <View style={styles.inputContainerStyle}>
        <MaterialCommunityIcons
          name='lock'
          size={20}
          color={colors.medium}
          style={styles.iconStyle}
        />
        <TextInput
          style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          placeholder='Password'
          secureTextEntry={true}
          textContentType='password'
        />
      </View>

      {formik.errors.password && formik.touched.password && (
        <Text style={{ color: "red" }}>{formik.errors.password}</Text>
      )}
      <AppButton title='Login' onPress={formik.handleSubmit} color='primary' />
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
  inputContainerStyle: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  inputStyle: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  iconStyle: {
    marginRight: 10,
  },
});
