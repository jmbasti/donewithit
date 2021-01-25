import React, { useEffect, useState } from "react";
import { Button, Image, ImageSourcePropType } from "react-native";
import { Screen } from "./Screen";
// IMAGEPICKER
import * as ImagePicker from "expo-image-picker";
// PERMISSIONS
import * as Permissions from "expo-permissions";

interface AppImagePickerProps {}
type ImageData = string | undefined;

export const AppImagePicker: React.FC<AppImagePickerProps> = ({}) => {
  //
  const [imageUri, setImageUri] = useState<ImageData>();
  // CAMERA PERMISSION
  useEffect(() => {
    const requestPermission = async () => {
      // PERMISSIONS
      // const {granted} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.LOCATION);
      // if(granted) {
      //   alert("You need to enable permission to access the library");
      // }
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
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen>
      <Button title='Select Image' onPress={selectImage} />
      <Image
        source={{ uri: imageUri }}
        style={{ width: "100%", height: 500 }}
      />
    </Screen>
  );
};
