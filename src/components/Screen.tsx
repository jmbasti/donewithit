import React from "react";
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
// Constants
import Constants from "expo-constants";

interface ScreenProps {}

export const Screen: React.FC<ScreenProps> = ({ children }) => {
  return <SafeAreaView style={styles.screenStyle}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screenStyle: {
    // paddingTop: Platform.OS === "android" ? StatusBar.
    // currentHeight : 0,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
