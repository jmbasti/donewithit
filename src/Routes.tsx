import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthScreen } from "./screens/auth/AuthScreen";
import { ListingDetailsScreen } from "./screens/main/ListingDetailsScreen";
import { MessagesScreen } from "./screens/main/MessagesScreen";
import { AccountScreen } from "./screens/main/AccountScreen";
import { ListingScreens } from "./screens/main/ListingScreens";
import { AppPicker } from "./components/AppPicker";
import { SafeAreaView } from "react-native";
import { Screen } from "./components/Screen";

// DUMMY`
import { categories } from "./data/categories";
import { LoginScreen } from "./screens/auth/LoginScreen";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  //
  const [category, setCategory] = useState(categories[0]);
  return (
    <NavigationContainer>
      {/* <AuthScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <AccountScreen /> */}
      {/* <ListingScreens /> */}
      <Screen>
        <AppPicker
          numberofColumns={3}
          icon='apps'
          placeholder='Category'
          items={categories}
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
        />
      </Screen>
      {/* <LoginScreen /> */}
    </NavigationContainer>
  );
};
