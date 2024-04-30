import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child 1</Text>
      <Text style={styles.textStyle}>Child 2</Text>
      <Text style={styles.textStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 600,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    borderWidth: 10,
    borderColor: "red",
    fontSize: 40,

    fontWeight: "bold",
  },
});

export default BoxScreen;
