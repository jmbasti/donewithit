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
// COLORS
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthNavProps } from "../../types/AuthParamList";

interface SigninProps {}

export function Signin({ navigation, route }: AuthNavProps<"Signin">) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainerStyle}>
        <View>
          {/* <View style={styles.leftButtonStyle}></View> */}
          <MaterialCommunityIcons name='close' color='#fff' size={35} />
        </View>
        <View>
          {/* <View style={styles.rightButtonStyle}></View> */}
          <MaterialCommunityIcons
            name='trash-can-outline'
            color='#fff'
            size={35}
          />
        </View>
      </View>
      <View style={styles.imageContainerStyle}>
        <Image
          resizeMode='contain'
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
    backgroundColor: colors.black,
  },
  leftButtonStyle: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
  },
  rightButtonStyle: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
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
