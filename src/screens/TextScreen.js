import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
} from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  const HandlePassword = (text) => {
    setPassword(text);
  };

  return (
    <View>
      <Text>Enter Your Name</Text>
      <TextInput
        autoCapitalize="none"
        textContentType="password"
        autoCorrect={false}
        style={styles.Input}
        value={password}
        onChangeText={(text) => HandlePassword(text)}
      />

      {password.length < 5 ? (
        <Text>
          Password must be longer than 5 characters
        </Text>
      ) : null}
    </View>
  );
};

// alternative way w useRef
/* const nameRef = useRef("");

const HandleName = (text) => {
  nameRef.current = text;
};

return (
  <View>
    <Text>Enter Your Name</Text>
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.Input}
      onChangeText={(text) => HandleName(text)}
    />

    <Text>Your Name is: {nameRef.current}</Text>
  </View>
);
};
// */
const styles = StyleSheet.create({
  Input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
