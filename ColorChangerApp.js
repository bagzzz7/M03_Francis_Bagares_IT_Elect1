
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ColorChangerApp() {
  const [color, setColor] = useState("blue");

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>Current Color: {color}</Text>
      <Button title="Red" onPress={() => setColor("red")} />
      <Button title="Green" onPress={() => setColor("green")} />
      <Button title="Blue" onPress={() => setColor("blue")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: "white",
  },
});