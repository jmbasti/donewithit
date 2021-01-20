import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthScreen } from "./screens/auth/AuthScreen";
import { ListingDetailsScreen } from "./screens/main/ListingDetailsScreen";
import { MessagesScreen } from "./screens/main/MessagesScreen";
import { AccountScreen } from "./screens/main/AccountScreen";
import { ListingScreens } from "./screens/main/ListingScreens";
import { AppTextInput } from "./components/AppTextInput";
import { SafeAreaView } from "react-native";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      {/* <AuthScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <AccountScreen /> */}
      {/* <ListingScreens /> */}
      <SafeAreaView>
        <AppTextInput icon='email' placeholder='Username' />
      </SafeAreaView>
    </NavigationContainer>
  );
};
