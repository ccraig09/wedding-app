import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import { COLORS, SIZES } from '../utils/theme';
import Button from '../components/Button';
import moment from 'moment';

const AddNoteScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter a title');
      return;
    }

    if (!content.trim()) {
      Alert.alert('Error', 'Please enter note content');
      return;
    }

    // In a real app, you would save this to your database
    // For now, we'll just navigate back
    Alert.alert('Success', 'Note saved successfully!');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter note title"
            placeholderTextColor={COLORS.gray}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Content</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={content}
            onChangeText={setContent}
            placeholder="Write your note here..."
            placeholderTextColor={COLORS.gray}
            multiline
            numberOfLines={10}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button 
            title="Save Note" 
            onPress={handleSave} 
            style={styles.button}
          />
          <Button 
            title="Cancel" 
            onPress={() => navigation.goBack()} 
            type="secondary"
            style={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 12,
    fontSize: SIZES.medium,
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  textArea: {
    minHeight: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default AddNoteScreen;