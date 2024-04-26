import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
} from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 45 },
    { name: "Friend #3", age: 32 },
    { name: "Friend #4", age: 27 },
    { name: "Friend #5", age: 53 },
    { name: "Friend #6", age: 30 },
    { name: "Friend #7", age: 20 },
    { name: "Friend #8", age: 45 },
    { name: "Friend #9", age: 32 },
    { name: "Friend #10", age: 27 },
    { name: "Friend #11", age: 53 },
    { name: "Friend #12", age: 30 },
  ];

  return (
    <View style={styles.body}>
      <FlatList
        keyExtractor={(friend) => friend.name}
        style={styles.list}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.item}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#e5e5e5",
    margin: 10,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  list: {
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  item: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default ListScreen;
