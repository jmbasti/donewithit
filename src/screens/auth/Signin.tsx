import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { AuthNavProps } from "../../types/AuthParamList";

interface SigninProps {}

export function Signin({ navigation, route }: AuthNavProps<"Signin">) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainerStyle}>
        <View style={styles.leftButtonStyle}></View>
        <View style={styles.rightButtonStyle}></View>
      </View>
      <View style={styles.imageContainerStyle}>
        <Image
          source={require("../../../assets/chair.jpg")}
          style={styles.imageStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000",
  },
  leftButtonStyle: {
    width: 60,
    height: 60,
    backgroundColor: "green",
  },
  rightButtonStyle: {
    width: 60,
    height: 60,
    backgroundColor: "red",
  },
  buttonContainerStyle: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
  },
  imageContainerStyle: {
    flex: 0.7,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
