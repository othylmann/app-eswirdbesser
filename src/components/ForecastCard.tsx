// Forecast Card Component

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HourlyForecast } from '../types/weather';
import { getWeatherInfo } from '../constants/weatherCodes';
import { COLORS } from '../constants/colors';

interface Props {
  forecast: HourlyForecast;
}

export function ForecastCard({ forecast }: Props) {
  const weatherInfo = getWeatherInfo(forecast.weatherCode);
  const time = new Date(forecast.time).getHours();
  const timeString = `${time}:00`;

  return (
    <View style={styles.card}>
      {/* Uhrzeit */}
      <Text style={styles.time}>{timeString}</Text>

      {/* Wetter-Icon */}
      <Ionicons
        name={weatherInfo.icon as any}
        size={32}
        color={COLORS.primary}
        style={styles.icon}
      />

      {/* Temperatur */}
      <Text style={styles.temperature}>{forecast.temperature}°</Text>

      {/* Regenwahrscheinlichkeit */}
      {forecast.precipitation > 0 && (
        <View style={styles.rainContainer}>
          <Ionicons name="water" size={14} color={COLORS.rain} />
          <Text style={styles.rainText}>{forecast.precipitation}%</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 80,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  time: {
    fontSize: 14,
    color: COLORS.textLight,
    fontWeight: '600',
    marginBottom: 8,
  },
  icon: {
    marginVertical: 8,
  },
  temperature: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 8,
  },
  rainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 4,
  },
  rainText: {
    fontSize: 12,
    color: COLORS.rain,
  },
});
