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
import { AuthNavProps } from "../../types/AuthParamList";

interface HomeProps {}

export function Home({ navigation, route }: AuthNavProps<"Home">) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={styles.backgoundImageStyle}
      >
        <View style={styles.logoContainerStyle}>
          <Image
            source={require("../../../assets/logo-red.png")}
            style={styles.logoStyle}
          />
          <Text style={styles.textStyle}>Sell What You Don't Need!</Text>
        </View>
        <View style={styles.signinStyle}></View>
        <View style={styles.signupStyle}></View>
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
  signinStyle: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  signupStyle: {
    width: "100%",
    height: 70,
    backgroundColor: "#48cdc4",
  },
});
