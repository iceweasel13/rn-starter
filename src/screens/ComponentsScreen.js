import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
} from "react-native";

const ComponentsScreen = () => {
  const name = "Nihat";
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Getting started with React Native!
      </Text>
      <Text style={styles.mediumText}>
        My name is {name}
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          margin: 10,
          padding: 5,
        }}
        placeholder="Type something here!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    fontWeight: "bold",
  },
  mediumText: {
    fontSize: 20,
  },
  body: {
    padding: 10,
    margin: 10,
  },
});

export default ComponentsScreen;
