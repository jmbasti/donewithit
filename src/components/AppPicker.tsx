import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  Modal,
  Button,
  Picker,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
// CONFIG
import colors from "../config/colors";
// COMPONENT
import { Screen } from "./Screen";
import { PickerItem } from "./PickerItem";

interface AppPickerProps {
  icon?: any;
  placeholder: string;
  items: any;
  selectedItem: any;
  onSelectItem: (arg0: any) => void;
  numberofColumns: number;
}

interface AppPickerProps {}

export const AppPicker: React.FC<AppPickerProps> = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
  numberofColumns,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.containerStyle}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.iconStyle}
            />
          )}

          {selectedItem ? (
            <Text style={styles.textStyle}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholderStyle}>{placeholder}</Text>
          )}
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)} />
          <FlatList
            numColumns={numberofColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => {
              //
              return (
                <PickerItem
                  icon={item.icon}
                  color={item.backgroundColor}
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              );
            }}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textStyle: {
    flex: 1,
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  placeholderStyle: {
    color: colors.medium,
    flex: 1,
  },
  iconStyle: {
    marginRight: 10,
  },
});
