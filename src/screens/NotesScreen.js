import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../utils/theme';
import NoteCard from '../components/NoteCard';
import { NOTES } from '../utils/mockData';

const NotesScreen = ({ navigation }) => {
  const handleNotePress = (note) => {
    navigation.navigate('NoteDetail', { note });
  };

  const handleAddNote = () => {
    navigation.navigate('AddNote');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={NOTES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteCard note={item} onPress={() => handleNotePress(item)} />
        )}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
        <Ionicons name="add" size={30} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    paddingVertical: 16,
    paddingBottom: 80, // Extra padding for FAB
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default NotesScreen;