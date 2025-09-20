import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Messenger from './Messenger';
import CommentSection from './CommentSection';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Messenger />
      <CommentSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
});