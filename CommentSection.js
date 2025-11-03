import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  FlatList, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  Image 
} from 'react-native';

export default function CommentSection() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [inputHeight, setInputHeight] = useState(40);

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
      setInputHeight(40);
    }
  };

  // 🔹 Each comment shows text only (no avatar, no online image)
  const renderItem = ({ item }) => (
    <Text style={styles.text}>{item}</Text>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={styles.panelContainer}>
        <Text style={styles.header}>Comment</Text>

        {/* 🔹 Local static image */}
        <Image 
          source={require('./assets/Mypic.jpg')} 
          style={styles.mainImage} 
        />

        <View style={styles.panel}>
          <FlatList
            data={comments}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.messages}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { height: inputHeight }]}
              placeholder="Add a comment..."
              value={comment}
              onChangeText={setComment}
              multiline
              onContentSizeChange={(event) =>
                setInputHeight(
                  event.nativeEvent.contentSize.height < 100
                    ? event.nativeEvent.contentSize.height
                    : 100
                )
              }
            />
            <Button title="Post" onPress={handleAddComment} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  panelContainer: {
    marginBottom: 20,
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  mainImage: {
    width: 200,
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  panel: {
    width: 300,
    flex: 1,
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
    alignItems: 'flex-end',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    color: 'black',
    borderRadius: 5,
  },
});