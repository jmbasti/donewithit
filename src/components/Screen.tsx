import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
// Constants
import Constants from "expo-constants";

interface ScreenProps {
  style?: any;
}

export const Screen: React.FC<ScreenProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screenStyle, style]}>
      <View style={[styles.viewStyle, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    // paddingTop: Platform.OS === "android" ? StatusBar.
    // currentHeight : 0,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
});
