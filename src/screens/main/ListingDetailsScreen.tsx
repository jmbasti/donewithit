import React from "react";
import { View } from "react-native";
import { Card } from "../../components/Card";

interface ListingDetailsScreenProps {}

export const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({}) => {
  return (
    <View>
      <Card
        title='Red jacket for sale'
        subTitle='$100'
        image={require("../../../assets/jacket.jpg")}
      />
    </View>
  );
};
