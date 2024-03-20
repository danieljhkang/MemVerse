import * as React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  const data = [
    { key: "1", name: "Item 1" },
    { key: "2", name: "Item 2" },
    { key: "3", name: "Item 3" },
    // Add more items as needed
  ];

  return (
    <View
      style={{
        marginTop: 100,
        flex: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
