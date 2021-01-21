import React from "react";
import { View, StyleSheet } from "react-native";
// CONFIG
import colors from "../config/colors";

interface ListItemSeparatorProps {}

export const ListItemSeparator: React.FC<ListItemSeparatorProps> = ({}) => {
  return <View style={styles.separatorStyle}></View>;
};

const styles = StyleSheet.create({
  separatorStyle: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
