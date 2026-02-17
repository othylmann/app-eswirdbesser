// Optimism Message Component

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OptimismMessage as OptimismMessageType } from '../types/weather';
import { COLORS } from '../constants/colors';

interface Props {
  message: OptimismMessageType;
}

export function OptimismMessage({ message }: Props) {
  return (
    <View style={styles.container}>
      {/* Emoji */}
      <Text style={styles.emoji}>{message.emoji}</Text>

      {/* Headline */}
      <Text style={styles.headline}>{message.headline}</Text>

      {/* Message */}
      <Text style={styles.message}>{message.message}</Text>

      {/* Praktischer Tipp (optional) */}
      {message.tip && (
        <View style={styles.tipContainer}>
          <Text style={styles.tip}>{message.tip}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 20,
    marginVertical: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  emoji: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 12,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: 24,
  },
  tipContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.background,
  },
  tip: {
    fontSize: 15,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 22,
  },
});
