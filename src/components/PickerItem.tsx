import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface PickerItemProps {
  label: string;
  onPress: () => void;
}

export const PickerItem: React.FC<PickerItemProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    padding: 20,
  },
});
