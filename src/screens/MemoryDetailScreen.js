import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { COLORS, SIZES, SHADOWS } from '../utils/theme';
import moment from 'moment';

const MemoryDetailScreen = ({ route }) => {
  const { memory } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: memory.image }}
        style={styles.image}
        contentFit="cover"
        transition={300}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{memory.title}</Text>
        <Text style={styles.date}>{moment(memory.date).format('MMMM D, YYYY')}</Text>
        <Text style={styles.description}>{memory.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -25,
    ...SHADOWS.medium,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
  },
  date: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginBottom: 15,
  },
  description: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    lineHeight: 24,
  },
});

export default MemoryDetailScreen;