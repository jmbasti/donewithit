import React from "react";
import {
  ImageProps,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  Animated,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// Swipeable
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

interface ListItemProps {
  image: ImageProps["source"];
  title: string;
  subTitle: string;
  onPress: () => void;
  renderRightActions?:
    | ((
        progressAnimatedValue: Animated.AnimatedInterpolation,
        dragAnimatedValue: Animated.AnimatedInterpolation
      ) => React.ReactNode)
    | undefined;
}

export const ListItem: React.FC<ListItemProps> = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.containerStyle}>
          <Image
            source={image}
            resizeMode='contain'
            style={styles.imageStyles}
          />
          <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.subTitleStyle}>{subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    padding: 15,
  },
  imageStyles: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  titleStyle: {
    fontWeight: "500",
  },
  subTitleStyle: {
    color: colors.medium,
  },
});
