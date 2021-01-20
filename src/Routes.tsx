import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthScreen } from "./screens/auth/AuthScreen";
import { ListingDetailsScreen } from "./screens/main/ListingDetailsScreen";
import { MessagesScreen } from "./screens/main/MessagesScreen";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      {/* <AuthScreen /> */}
      {/* <ListingDetailsScreen /> */}
      <MessagesScreen />
    </NavigationContainer>
  );
};
