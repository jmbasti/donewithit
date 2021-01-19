import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthScreen } from "./screens/auth/AuthScreen";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <AuthScreen />
    </NavigationContainer>
  );
};
