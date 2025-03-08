import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, SIZES } from '../utils/theme';

const Button = ({ 
  title, 
  onPress, 
  type = 'primary', 
  disabled = false, 
  loading = false,
  style = {},
  textStyle = {}
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[`${type}Button`],
        disabled && styles.disabledButton,
        style
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={type === 'primary' ? COLORS.white : COLORS.primary} />
      ) : (
        <Text 
          style={[
            styles.buttonText, 
            styles[`${type}Text`],
            disabled && styles.disabledText,
            textStyle
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  disabledButton: {
    backgroundColor: COLORS.lightGray,
    borderColor: COLORS.gray,
  },
  buttonText: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  primaryText: {
    color: COLORS.white,
  },
  secondaryText: {
    color: COLORS.primary,
  },
  disabledText: {
    color: COLORS.gray,
  },
});

export default Button;