import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
const ColorCounter = ({
  color,
  onIncrease,
  onDecrease,
}) => {
  return (
    <View>
      <Text>Color Counter</Text>
      <Text>{color}</Text>
      <Button
        styles={styles.Button}
        onPress={onIncrease}
        title={`Increase ${color}`}
      />
      <Button
        styles={styles.Button}
        onPress={onDecrease}
        title={`Decrease  ${color}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    margin: 10,

    textAlign: "center",
    color: "black",
    backgroundColor: "white",
  },
});

export default ColorCounter;
