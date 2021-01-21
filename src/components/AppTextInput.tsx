import React, { useState } from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// CONFIG
import colors from "../config/colors";

interface AppTextInputProps {
  icon?: any;
  placeholder: string;
}

export const AppTextInput: React.FC<AppTextInputProps> = ({
  icon,
  ...otherProps
}) => {
  return (
    <View style={styles.containerStyle}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.iconStyle}
        />
      )}
      <TextInput style={styles.inputStyle} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
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
