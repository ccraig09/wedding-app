import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../utils/theme';
import { getDaysUntilWedding } from '../utils/mockData';

const CountdownTimer = () => {
  const { count, label } = getDaysUntilWedding();

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '90%',
    ...SHADOWS.medium,
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 5,
  },
  label: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    textAlign: 'center',
  },
});

export default CountdownTimer;