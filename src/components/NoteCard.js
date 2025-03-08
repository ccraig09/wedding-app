import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../utils/theme';
import moment from 'moment';

const NoteCard = ({ note, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content} numberOfLines={3}>
        {note.content}
      </Text>
      <Text style={styles.date}>{moment(note.date).format('MMMM D, YYYY')}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    ...SHADOWS.small,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  content: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    marginBottom: 10,
  },
  date: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    alignSelf: 'flex-end',
  },
});

export default NoteCard;