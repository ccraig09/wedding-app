import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { COLORS, SIZES, SHADOWS } from '../utils/theme';
import moment from 'moment';

const MemoryCard = ({ memory, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: memory.image }}
        style={styles.image}
        contentFit="cover"
        transition={200}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{memory.title}</Text>
        <Text style={styles.date}>{moment(memory.date).format('MMMM D, YYYY')}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {memory.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    ...SHADOWS.medium,
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    padding: 15,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  date: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    marginBottom: 8,
  },
  description: {
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
});

export default MemoryCard;