import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, SHADOWS } from '../utils/theme';
import ReminderItem from '../components/ReminderItem';
import Button from '../components/Button';
import { REMINDERS } from '../utils/mockData';
import moment from 'moment';

const RemindersScreen = () => {
  const [reminders, setReminders] = useState(REMINDERS);
  const [newReminder, setNewReminder] = useState('');
  const [newReminderDate, setNewReminderDate] = useState(moment().format('YYYY-MM-DD'));
  const [showAddForm, setShowAddForm] = useState(false);

  const handleToggleComplete = (id, completed) => {
    setReminders(
      reminders.map(reminder => 
        reminder.id === id ? { ...reminder, completed } : reminder
      )
    );
  };

  const handleAddReminder = () => {
    if (!newReminder.trim()) {
      Alert.alert('Error', 'Please enter a reminder title');
      return;
    }

    const reminder = {
      id: Date.now().toString(),
      title: newReminder,
      date: newReminderDate,
      completed: false,
    };

    setReminders([...reminders, reminder]);
    setNewReminder('');
    setNewReminderDate(moment().format('YYYY-MM-DD'));
    setShowAddForm(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReminderItem 
            reminder={item} 
            onToggleComplete={handleToggleComplete} 
          />
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Wedding Reminders</Text>
            <Text style={styles.headerSubtitle}>
              Keep track of all your wedding tasks
            </Text>
          </View>
        }
        ListFooterComponent={
          showAddForm ? (
            <View style={styles.addForm}>
              <TextInput
                style={styles.input}
                value={newReminder}
                onChangeText={setNewReminder}
                placeholder="Enter reminder title"
                placeholderTextColor={COLORS.gray}
              />
              <TextInput
                style={styles.input}
                value={newReminderDate}
                onChangeText={setNewReminderDate}
                placeholder="YYYY-MM-DD"
                placeholderTextColor={COLORS.gray}
              />
              <View style={styles.formButtons}>
                <Button 
                  title="Add" 
                  onPress={handleAddReminder} 
                  style={styles.formButton}
                />
                <Button 
                  title="Cancel" 
                  onPress={() => setShowAddForm(false)} 
                  type="secondary"
                  style={styles.formButton}
                />
              </View>
            </View>
          ) : null
        }
        contentContainerStyle={styles.listContent}
      />
      
      {!showAddForm && (
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => setShowAddForm(true)}
        >
          <Ionicons name="add" size={30} color={COLORS.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: 20,
    backgroundColor: COLORS.white,
    marginBottom: 10,
    ...SHADOWS.small,
  },
  headerTitle: {
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
  listContent: {
    paddingBottom: 80, // Extra padding for FAB
  },
  addForm: {
    backgroundColor: COLORS.white,
    margin: 16,
    padding: 16,
    borderRadius: 10,
    ...SHADOWS.small,
  },
  input: {
    backgroundColor: COLORS.background,
    borderRadius: 8,
    padding: 12,
    fontSize: SIZES.medium,
    color: COLORS.text,
    marginBottom: 10,
  },
  formButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formButton: {
    flex: 1,
    marginHorizontal: 5,
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

export default RemindersScreen;