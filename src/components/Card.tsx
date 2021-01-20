import React from "react";
import { Text, View, ImageProps, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import { ListItem } from "./ListItem";

interface CardProps {
  title: string;
  subTitle: string;
  image: ImageProps["source"];
}

export const Card: React.FC<CardProps> = ({ title, subTitle, image }) => {
  return (
    <View style={styles.cardStyle}>
      <Image source={image} style={styles.imageStyles} />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.subTitleStyle}>{subTitle}</Text>
      </View>
      <View style={styles.userContainer}>
        {/* <ListItem
          image={require("../../assets/mosh.jpg")}
          title='Mosh'
          subTitle='5 Listings'
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  imageStyles: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  titleStyle: {
    marginBottom: 7,
    fontSize: 24,
    fontWeight: "500",
  },
  subTitleStyle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
