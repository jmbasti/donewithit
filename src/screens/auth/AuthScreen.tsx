import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import { Signin } from "./Signin";

const Stack = createStackNavigator();

interface AuthScreenProps {}

export const AuthScreen: React.FC<AuthScreenProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ header: () => null }}
      ></Stack.Screen>
      <Stack.Screen
        name='Signin'
        component={Signin}
        options={{
          header: () => null,
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
