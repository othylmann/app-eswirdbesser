// Forecast List Component

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { HourlyForecast } from '../types/weather';
import { ForecastCard } from './ForecastCard';
import { COLORS } from '../constants/colors';

interface Props {
  forecasts: HourlyForecast[];
}

export function ForecastList({ forecasts }: Props) {
  if (forecasts.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nächste 6 Stunden</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {forecasts.map((forecast, index) => (
          <ForecastCard key={forecast.time} forecast={forecast} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginLeft: 20,
    marginBottom: 16,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
});
