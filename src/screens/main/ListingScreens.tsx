import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Screen } from "../../components/Screen";
import { Card } from "../../components/Card";
import colors from "../../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../../../assets/couch.jpg"),
  },
];

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
