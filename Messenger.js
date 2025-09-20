import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function Messenger() {
  const [suwat, setSuwat] = useState('');
  const [mensahe, setMensahe] = useState([]);

  const handleSendMessage = () => {
    if (suwat.trim()) {
      setMensahe([...mensahe, suwat]);
      setSuwat('');
    }
  };

  const renderItem = ({ item }) => <Text style={styles.text}>{item}</Text>;

  return (
    <View style={styles.panelContainer}>
      <Text style={styles.header}>Messenger</Text>
      <View style={styles.panel}>
        <FlatList
          data={mensahe}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.messages}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={suwat}
            onChangeText={setSuwat}
          />
          <Button title="Send" onPress={handleSendMessage} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panelContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  panel: {
    width: 300,
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  messages: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    color: 'black',
  },
});