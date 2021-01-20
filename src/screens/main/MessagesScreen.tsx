import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
// Constants
import Constants from "expo-constants";
import { ListItem } from "../../components/ListItem";
import { Screen } from "../../components/Screen";
import { ListItemSeparator } from "../../components/ListItemSeparator";
import { ListItemDeleteAction } from "../../components/ListItemDeleteAction";

console.log(Constants);

// DUMMY DATA
const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../../../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "T4",
    description: "D4",
    image: require("../../../assets/mosh.jpg"),
  },
];

interface MessagesScreenProps {}

export const MessagesScreen: React.FC<MessagesScreenProps> = ({}) => {
  //
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  //  Delete Messages
  const handleDelete = (message: any) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  //
  return (
    <Screen>
      <FlatList
        data={messages}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              image={item.image}
              subTitle={item.description}
              onPress={() => console.log("object", item)}
              //   Swipeable
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        // LINE SEPARATOR after each item
        ItemSeparatorComponent={ListItemSeparator}
        // PULL TO REFRESH
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../../../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});
