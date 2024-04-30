import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Main Page</Text>
      <Button
        onPress={() =>
          props.navigation.navigate("Components")
        }
        title="Go to Components Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Square")}
        title="Go to Square Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Text")}
        title="Go to 
        Input Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Box")}
        title="Go to Box Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
