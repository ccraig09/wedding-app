import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../utils/theme';
import moment from 'moment';

const ReminderItem = ({ reminder, onToggleComplete }) => {
  const [completed, setCompleted] = useState(reminder.completed);

  const handleToggle = () => {
    setCompleted(!completed);
    if (onToggleComplete) {
      onToggleComplete(reminder.id, !completed);
    }
  };

  const isUpcoming = moment(reminder.date).isAfter(moment());
  const isPast = moment(reminder.date).isBefore(moment(), 'day');

  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        completed && styles.completedContainer
      ]} 
      onPress={handleToggle}
    >
      <View style={styles.checkboxContainer}>
        <TouchableOpacity 
          style={[styles.checkbox, completed && styles.checkedBox]} 
          onPress={handleToggle}
        >
          {completed && <Ionicons name="checkmark" size={18} color={COLORS.white} />}
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text 
          style={[
            styles.title, 
            completed && styles.completedText
          ]}
        >
          {reminder.title}
        </Text>
        <Text 
          style={[
            styles.date, 
            completed && styles.completedText,
            isPast && !completed && styles.pastDate,
            isUpcoming && !completed && styles.upcomingDate
          ]}
        >
          {moment(reminder.date).format('MMMM D, YYYY')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  completedContainer: {
    backgroundColor: COLORS.lightGray,
  },
  checkboxContainer: {
    marginRight: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedBox: {
    backgroundColor: COLORS.primary,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  date: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: COLORS.gray,
  },
  pastDate: {
    color: COLORS.error,
  },
  upcomingDate: {
    color: COLORS.success,
  },
});

export default ReminderItem;