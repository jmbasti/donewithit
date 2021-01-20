// ENCAPSULATION
import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

interface AppTextProps {}

export const AppText: React.FC<AppTextProps> = ({ children }) => {
  return <Text>{children}</Text>;
  // <Text style={styles.textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  //   textStyle: {
  //     color: "tomato",
  //     //  PLATFORM SPECIFIC
  //     ...Platform.select({
  //       // IOS STYLES
  //       ios: {
  //         fontSize: 20,
  //         fontFamily: "Avenir",
  //       },
  //       // ANDROID STYLES
  //       android: {
  //         fontSize: 20,
  //         fontFamily: "Roboto",
  //       },
  //     }),
  //   },
});
