// Current Weather Display Component

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CurrentWeather as CurrentWeatherType } from '../types/weather';
import { getWeatherInfo } from '../constants/weatherCodes';
import { COLORS } from '../constants/colors';

interface Props {
  weather: CurrentWeatherType;
}

export function CurrentWeather({ weather }: Props) {
  const weatherInfo = getWeatherInfo(weather.weatherCode);

  return (
    <View style={styles.container}>
      {/* Wetter-Icon */}
      <Ionicons
        name={weatherInfo.icon as any}
        size={120}
        color={COLORS.primary}
        style={styles.icon}
      />

      {/* Temperatur */}
      <Text style={styles.temperature}>{weather.temperature}°</Text>

      {/* Wetter-Beschreibung */}
      <Text style={styles.description}>{weatherInfo.description}</Text>

      {/* Details */}
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Ionicons name="water" size={20} color={COLORS.textLight} />
          <Text style={styles.detailText}>{weather.humidity}%</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="speedometer" size={20} color={COLORS.textLight} />
          <Text style={styles.detailText}>{weather.windSpeed} km/h</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  icon: {
    marginBottom: 10,
  },
  temperature: {
    fontSize: 72,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  description: {
    fontSize: 20,
    color: COLORS.textLight,
    marginTop: 5,
  },
  details: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 30,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 16,
    color: COLORS.textLight,
  },
});
