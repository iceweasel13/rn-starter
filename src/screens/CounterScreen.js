import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <View>
      <Text style={styles.text}>Counter Screen</Text>
      <Button
        title="Increase"
        onPress={() => {
          increaseCounter();
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          decreaseCounter();
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CounterScreen;
