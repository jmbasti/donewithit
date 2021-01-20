import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Screen } from "../../components/Screen";
import { ListItem } from "../../components/ListItem";
import { Icon } from "../../components/Icon";
import colors from "../../config/colors";
import { ListItemSeparator } from "../../components/ListItemSeparator";

interface AccountScreenProps {}

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export const AccountScreen: React.FC<AccountScreenProps> = ({}) => {
  return (
    <Screen style={styles.screenStyle}>
      <View style={styles.containerStyle}>
        <ListItem
          title='Mosh Hamedani'
          subTitle='Programming with Mosh'
          image={require("../../../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.containerStyle}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            );
          }}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.containerStyle}>
        <ListItem
          title='Log Out'
          IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginVertical: 20,
  },
  screenStyle: {
    backgroundColor: colors.light,
  },
});
