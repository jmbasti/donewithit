import React, { useEffect } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  ImageProps,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";
import { Screen } from "./Screen";

interface ImageInputProps {
  imageUri?: any;
  onChangeImage: (arg: any) => void;
}

export const ImageInput: React.FC<ImageInputProps> = ({
  imageUri,
  onChangeImage,
}) => {
  // CAMERA PERMISSION
  useEffect(() => {
    const requestPermission = async () => {
      const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!result.granted) {
        alert("You need to enable permission to access the library");
      }
    };
    requestPermission();
  }, []);

  // SELECT IMAGE
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Helper Function
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.imageContainerStyle}>
        {!imageUri && (
          <MaterialCommunityIcons
            name='camera'
            color={colors.medium}
            size={40}
          />
        )}
        {imageUri && (
          <Image style={styles.imageStyle} source={{ uri: imageUri }} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageContainerStyle: {
    height: 100,
    width: 100,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
  },

  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
