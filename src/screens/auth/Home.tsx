import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
// COMPONENT
import { AppButton } from "../../components/AppButton";
import { AppText } from "../../components/AppText";
// CONFIG
import colors from "../../config/colors";
import { AuthNavProps } from "../../types/AuthParamList";

interface HomeProps {}

export function Home({ navigation, route }: AuthNavProps<"Home">) {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={10}
        source={require("../../../assets/background.jpg")}
        style={styles.backgoundImageStyle}
      >
        <View style={styles.logoContainerStyle}>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Image
              source={require("../../../assets/logo-red.png")}
              style={styles.logoStyle}
            />
          </TouchableOpacity>
          {/* <Text style={styles.textStyle}>Sell What You Don't Need!</Text> */}
          {/* ENCAPSULATION */}
          <AppText>Sell What You Don't Need!</AppText>
        </View>
        {/* <View style={styles.signinStyle}></View> */}
        {/* <View style={styles.signupStyle}></View> */}
        <View style={styles.buttonContainer}>
          <AppButton
            title='Login'
            onPress={() => {
              console.log("Test");
            }}
            color='primary'
          />
          <AppButton
            title='Register'
            onPress={() => {
              console.log("Test");
            }}
            color='secondary'
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainerStyle: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 18,
    paddingTop: 10,
  },
  logoStyle: {
    width: 100,
    height: 100,
  },
  backgoundImageStyle: {
    alignItems: "center",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  // signinStyle: {
  //   width: "100%",
  //   height: 70,
  //   backgroundColor: colors.primary,
  // },
  // signupStyle: {
  //   width: "100%",
  //   height: 70,
  //   backgroundColor: colors.secondary,
  // },
});
