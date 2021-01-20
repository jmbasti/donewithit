// ENCAPSULATION
import React from "react";
import { Text, StyleSheet } from "react-native";

interface AppTextProps {}

export const AppText: React.FC<AppTextProps> = ({ children }) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};
const styles = StyleSheet.create({
  textStyle: {
    color: "tomato",
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "Roboto",
    paddingVertical: 20,
  },
});
