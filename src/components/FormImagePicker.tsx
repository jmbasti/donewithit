// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Image,
//   View,
//   Platform,
//   TextInput,
//   Text,
//   Alert,
// } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// // IMAGEPICKER

// import colors from "../config/colors";
// import { AppButton } from "./AppButton";
// import { Screen } from "./Screen";
// // FORMIK
// import { useFormik } from "formik";
// // YUP
// import * as Yup from "yup";

// type ImageData = string | undefined | null;

// interface FormImagePickerProps {}

// export const FormImagePicker: React.FC<FormImagePickerProps> = ({}) => {
//   //
//   const [imageUri, setImageUri] = useState<ImageData>();
//   const [imageUris, setImageUris] = useState([]);

//   const formik = useFormik({
//     initialValues: {
//       title: "",
//       description: "",
//       price: "",
//       image: "",
//     },
//     // YUP VALIDATION SCHEMA
//     validationSchema: Yup.object().shape({
//       title: Yup.string().required("Title is a required field"),
//       description: Yup.string().required("Description is a required field"),
//       price: Yup.number().required("Price is a required field"),
//       image: Yup.mixed().required("Plese select at least one image"),
//     }),
//     onSubmit: (values, { resetForm }) => {
//       // CLEAR THE FORM AFTER SUBMISSION
//       setTimeout(resetForm, 2000);
//     },
//   });
//   //

//   return (
//     <Screen style={styles.containerStyle}>
//       <TouchableWithoutFeedback
//         style={styles.imageSelectStyle}
//         onPress={handlePress}
//       >
//         <View style={styles.imageContainerStyle}>
//           {!imageUri && (
//             <MaterialCommunityIcons
//               name='camera'
//               color={colors.medium}
//               size={40}
//             />
//           )}
//           {imageUri && (
//             <Image style={styles.imageStyle} source={{ uri: imageUri }} />
//           )}
//         </View>
//       </TouchableWithoutFeedback>

//       <View style={{ height: 15, paddingLeft: 15 }}>
//         {formik.errors.image && formik.touched.image && (
//           <Text style={{ color: "red", fontSize: 15 }}>
//             {formik.errors.image}
//           </Text>
//         )}
//       </View>
//       {/* TITLE */}
//       <View style={styles.inputContainerStyle}>
//         <TextInput
//           style={styles.inputStyle}
//           autoCapitalize='none'
//           autoCorrect={false}
//           value={formik.values.title}
//           onChangeText={formik.handleChange("title")}
//           onBlur={formik.handleBlur("title")}
//           placeholder='Title'
//           placeholderTextColor={colors.medium}
//         />
//       </View>
//       <View style={{ height: 15, paddingLeft: 15 }}>
//         {formik.errors.title && formik.touched.title && (
//           <Text style={{ color: "red", fontSize: 15 }}>
//             {formik.errors.title}
//           </Text>
//         )}
//       </View>

//       {/* PRICE */}
//       <View style={[styles.inputContainerStyle, { width: "30%" }]}>
//         <TextInput
//           style={styles.inputStyle}
//           autoCapitalize='none'
//           autoCorrect={false}
//           value={formik.values.price}
//           onChangeText={formik.handleChange("price")}
//           onBlur={formik.handleBlur("price")}
//           placeholder='Price'
//           placeholderTextColor={colors.medium}
//         />
//       </View>
//       <View style={{ height: 15, paddingLeft: 15 }}>
//         {formik.errors.price && formik.touched.price && (
//           <Text style={{ color: "red", fontSize: 15 }}>
//             {formik.errors.price}
//           </Text>
//         )}
//       </View>

//       {/* DESCRIPTION */}
//       <View style={styles.inputContainerStyle}>
//         <TextInput
//           style={styles.inputStyle}
//           autoCapitalize='none'
//           autoCorrect={false}
//           value={formik.values.description}
//           onChangeText={formik.handleChange("description")}
//           onBlur={formik.handleBlur("description")}
//           placeholder='Description'
//           placeholderTextColor={colors.medium}
//         />
//       </View>
//       <View style={{ height: 15, paddingLeft: 15 }}>
//         {formik.errors.description && formik.touched.description && (
//           <Text style={{ color: "red", fontSize: 15 }}>
//             {formik.errors.description}
//           </Text>
//         )}
//       </View>

//       <AppButton title='POST' onPress={formik.handleSubmit} color='primary' />
//     </Screen>
//   );
// };

// const styles = StyleSheet.create({
//   containerStyle: {
//     padding: 15,
//   },
//   imageGroupContainerStyle: {
//     flexDirection: "row-reverse",
//   },

//   inputContainerStyle: {
//     backgroundColor: colors.light,
//     borderRadius: 25,
//     //marginBottom: 25,
//     width: "100%",
//     padding: 15,
//     marginVertical: 10,
//   },
//   inputStyle: {
//     color: colors.dark,
//     fontSize: 18,
//     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
//   },
//   iconStyle: {
//     marginRight: 10,
//   },
// });
