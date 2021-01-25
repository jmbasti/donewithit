import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Platform,
  TextInput,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// IMAGEPICKER
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";
import { AppButton } from "./AppButton";
import { Screen } from "./Screen";
// FORMIK
import { useFormik } from "formik";
// YUP
import * as Yup from "yup";

type ImageData = string | undefined;

interface FormImagePickerProps {}

export const FormImagePicker: React.FC<FormImagePickerProps> = ({}) => {
  //
  const [imageUri, setImageUri] = useState<ImageData>();
  const [imageUriSelected, setImageUriSelected] = useState(Array());
  // SELECT IMAGE
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
    },
    // YUP VALIDATION SCHEMA
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Title is a required field"),
      description: Yup.string().required("Description is a required field"),
      price: Yup.number().required("Price is a required field"),
    }),
    onSubmit: (values, { resetForm }) => {
      // CLEAR THE FORM AFTER SUBMISSION
      setTimeout(resetForm, 2000);
    },
  });
  //

  return (
    <Screen style={styles.containerStyle}>
      <View style={styles.imageGroupContainerStyle}>
        <View style={styles.imageContainerStyle}>
          <Image style={styles.imageStyle} source={{ uri: imageUri }} />
        </View>

        <TouchableOpacity style={styles.imageSelectStyle} onPress={selectImage}>
          <MaterialCommunityIcons
            name='camera'
            color={colors.medium}
            size={40}
          />
        </TouchableOpacity>
      </View>
      {/* TITLE */}
      <View style={styles.inputContainerStyle}>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          value={formik.values.title}
          onChangeText={formik.handleChange("title")}
          onBlur={formik.handleBlur("title")}
          placeholder='Title'
          placeholderTextColor={colors.medium}
        />
        {formik.errors.title && formik.touched.title && (
          <Text style={{ color: "red", height: 15 }}>
            {formik.errors.title}
          </Text>
        )}
      </View>

      {/* PRICE */}
      <View style={[styles.inputContainerStyle, { width: "30%" }]}>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          value={formik.values.price}
          onChangeText={formik.handleChange("price")}
          onBlur={formik.handleBlur("price")}
          placeholder='Price'
          placeholderTextColor={colors.medium}
        />
      </View>
      {formik.errors.price && formik.touched.price && (
        <Text style={{ color: "red" }}>{formik.errors.price}</Text>
      )}

      {/* DESCRIPTION */}
      <View style={styles.inputContainerStyle}>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          value={formik.values.description}
          onChangeText={formik.handleChange("description")}
          onBlur={formik.handleBlur("description")}
          placeholder='Description'
          placeholderTextColor={colors.medium}
        />
      </View>
      {formik.errors.description && formik.touched.description && (
        <Text style={{ color: "red" }}>{formik.errors.description}</Text>
      )}

      <AppButton title='POST' onPress={formik.handleSubmit} color='primary' />
    </Screen>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 15,
  },
  imageGroupContainerStyle: {
    flexDirection: "row",
  },
  imageSelectStyle: {
    height: 100,
    width: 100,
    borderRadius: 15,
    backgroundColor: `${colors.light}`,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainerStyle: {
    height: 100,
    width: 100,
    borderRadius: 15,
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  inputContainerStyle: {
    // backgroundColor: colors.light,
    // borderRadius: 25,
    // marginBottom: 25,
    // width: "100%",
    // padding: 15,
    // marginVertical: 10,
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
