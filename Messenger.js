import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // 👈 expo icons for call & video

export default function MessengerClone() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hey! jow?",
      sender: "other",
      avatar: require("./assets/Mypic1.jpg"),
    },
    {
      id: "2",
      text: "hey yoww",
      sender: "me",
      avatar: require("./assets/Mypic.jpg"),
    },
  ]);

  const [input, setInput] = useState("");
  const [inputHeight, setInputHeight] = useState(40);
  const maxInputHeight = 120;
  const listRef = useRef(null);

  const sendMessage = () => {
    if (input.trim().length === 0) return;
    const newMsg = {
      id: Date.now().toString(),
      text: input,
      sender: "me",
      avatar: require("./assets/Mypic.jpg"),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setInputHeight(40);

    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollToEnd({ animated: true });
      }
    }, 50);
  };

  const renderItem = ({ item }) => {
    const isMe = item.sender === "me";
    return (
      <View
        style={[
          styles.messageRow,
          { justifyContent: isMe ? "flex-end" : "flex-start" },
        ]}
      >
        {!isMe && <Image source={item.avatar} style={styles.avatar} />}
        <View
          style={[
            styles.messageBubble,
            { backgroundColor: isMe ? "#0084ff" : "#e4e6eb" },
          ]}
        >
          <Text style={{ color: isMe ? "white" : "black", flexWrap: "wrap" }}>
            {item.text}
          </Text>
        </View>
        {isMe && <Image source={item.avatar} style={styles.avatar} />}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header with name + icons */}
      <View style={styles.header}>
        <Image source={require("./assets/Mypic1.jpg")} style={styles.headerAvatar} />
        <Text style={styles.headerName}>Josh Nikolus Pedros</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="call-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Ionicons name="videocam-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <FlatList
          ref={listRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.messagesList}
          contentContainerStyle={{ paddingBottom: 10 }}
        />

        {/* Input box */}
        <View style={styles.inputContainer}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
            multiline
            textAlignVertical="top"
            style={[styles.input, { height: inputHeight }]}
            onContentSizeChange={(event) => {
              const newHeight = Math.min(
                maxInputHeight,
                Math.max(40, event.nativeEvent.contentSize.height)
              );
              setInputHeight(newHeight);
            }}
            scrollEnabled={inputHeight >= maxInputHeight}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Text style={{ color: "white" }}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "white",
    marginTop: 20,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerName: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  headerIcons: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  messagesList: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 5,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 15,
    maxWidth: "70%",
    flexShrink: 1,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#f9f9f9",
    alignItems: "flex-end",
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    minHeight: 40,
    maxHeight: 120,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#0084ff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
