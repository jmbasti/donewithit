import React from "react";
import { StyleSheet, Text } from "react-native";

interface ErrorMessageProps {
  error: string | undefined;
  visible: boolean | undefined;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  visible,
}) => {
  if (!error || !visible) return null;
  return <Text style={styles.errorStyle}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorStyle: {
    color: "red",
  },
});
