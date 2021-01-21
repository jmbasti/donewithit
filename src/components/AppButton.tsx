import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
// CONFIG
import colors from "../config/colors";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  color: string;
}

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  color,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  textStyle: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
