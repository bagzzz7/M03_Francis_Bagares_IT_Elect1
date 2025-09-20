import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function CommentSection() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const renderItem = ({ item }) => <Text style={styles.text}>{item}</Text>;

  return (
    <View style={styles.panelContainer}>
      <Text style={styles.header}>Comment</Text>
      <View style={styles.panel}>
        <FlatList
          data={comments}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.messages}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a comment..."
            value={comment}
            onChangeText={setComment}
          />
          <Button title="Post" onPress={handleAddComment} />
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