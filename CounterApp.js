// CounterApp.js
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColorChangerApp from "./ColorChangerApp"; // ⬅️ import here

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <View style={styles.buttonRow}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
      </View>

      {/* ⬅️ Call the ColorChangerApp here */}
      <ColorChangerApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  counterText: {
    fontSize: 30,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 30,
    gap: 10, // for RN 0.71+, else use marginRight
  },
});