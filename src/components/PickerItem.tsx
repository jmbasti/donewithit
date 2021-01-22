import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

interface PickerItemProps {
  icon: string | any;
  label: string;
  onPress: () => void;
  color: string | undefined;
}

export const PickerItem: React.FC<PickerItemProps> = ({
  icon,
  label,
  onPress,
  color,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerStyle}>
      <View
        style={{
          height: 80,
          width: 80,
          backgroundColor: `${color}`,
          borderRadius: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name={icon} size={38} color={colors.white} />
      </View>
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  textStyle: {
    marginTop: 15,
    textAlign: "center",
  },
});
