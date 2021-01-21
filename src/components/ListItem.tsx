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
// Swipeable
import Swipeable from "react-native-gesture-handler/Swipeable";
//CONFIG
import colors from "../config/colors";

interface ListItemProps {
  image?: ImageProps["source"];
  title?: string;
  subTitle?: string;
  onPress?: () => void;
  renderRightActions?:
    | ((
        progressAnimatedValue: Animated.AnimatedInterpolation,
        dragAnimatedValue: Animated.AnimatedInterpolation
      ) => React.ReactNode)
    | undefined;
  IconComponent?: any;
}

export const ListItem: React.FC<ListItemProps> = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.containerStyle}>
          {IconComponent}
          {image && (
            <Image
              source={image}
              resizeMode='contain'
              style={styles.imageStyles}
            />
          )}
          <View style={styles.detailsContainer}>
            <Text style={styles.titleStyle}>{title}</Text>
            {subTitle && <Text style={styles.subTitleStyle}>{subTitle}</Text>}
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
    backgroundColor: colors.white,
  },
  imageStyles: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  titleStyle: {
    fontWeight: "500",
  },
  subTitleStyle: {
    color: colors.medium,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});
