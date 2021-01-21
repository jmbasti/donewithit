import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Screen } from "../../components/Screen";
import { Card } from "../../components/Card";
import colors from "../../config/colors";
// DUMMY DATA
import { listings } from "../../data/listings";

interface ListingScreensProps {}

export const ListingScreens: React.FC<ListingScreensProps> = ({}) => {
  return (
    <Screen style={styles.screenStyle}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.title}
              subTitle={`$ ${item.price}`}
              image={item.image}
            />
          );
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: colors.light,
    padding: 20,
  },
});
