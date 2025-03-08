import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../utils/theme';
import MemoryCard from '../components/MemoryCard';
import { MEMORIES } from '../utils/mockData';

const MemoriesScreen = ({ navigation }) => {
  const handleMemoryPress = (memory) => {
    navigation.navigate('MemoryDetail', { memory });
  };

  const handleAddMemory = () => {
    navigation.navigate('AddMemory');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={MEMORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MemoryCard memory={item} onPress={() => handleMemoryPress(item)} />
        )}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddMemory}>
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

export default MemoriesScreen;