import React from "react";
import { StyleSheet, View } from "react-native";
import { ImageInput } from "./ImageInput";

interface ImageInputListProps {
  imageUris: string[];
  onRemoveImage: (arg: any) => void;
  onAddImage: (arg: any) => void;
}

export const ImageInputList: React.FC<ImageInputListProps> = ({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) => {
  return (
    <View style={styles.containerStyle}>
      {imageUris.map((uri) => {
        return (
          <View style={styles.imageInputStyle} key={uri}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        );
      })}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageInputStyle: {
    marginRight: 10,
    marginBottom: 10,
  },
});
