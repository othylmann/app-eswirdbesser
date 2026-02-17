// Main Weather Screen

import React from 'react';
import { View, Text, ScrollView, RefreshControl, StyleSheet, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useWeather } from '../hooks/useWeather';
import { CurrentWeather } from '../components/CurrentWeather';
import { OptimismMessage } from '../components/OptimismMessage';
import { ForecastList } from '../components/ForecastList';
import { getFullOptimismMessage } from '../services/optimismEngine';
import { COLORS } from '../constants/colors';

export function WeatherScreen() {
  const { weatherData, loading, error, refetch } = useWeather();

  // Loading State
  if (loading && !weatherData) {
    return (
      <View style={styles.centerContainer}>
        <StatusBar style="dark" />
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>🌈 Lade optimistische Wettervorhersage...</Text>
      </View>
    );
  }

  // Error State
  if (error) {
    return (
      <View style={styles.centerContainer}>
        <StatusBar style="dark" />
        <Text style={styles.errorEmoji}>😊</Text>
        <Text style={styles.errorTitle}>Kleiner Moment!</Text>
        <Text style={styles.errorMessage}>{error}</Text>
        <Text style={styles.errorHint}>
          Bitte stelle sicher, dass du die Standortberechtigung erteilt hast.
        </Text>
      </View>
    );
  }

  // Keine Daten
  if (!weatherData) {
    return (
      <View style={styles.centerContainer}>
        <StatusBar style="dark" />
        <Text style={styles.errorMessage}>Keine Wetterdaten verfügbar</Text>
      </View>
    );
  }

  // Optimistische Nachricht generieren
  const optimismMessage = getFullOptimismMessage(
    weatherData.current.weatherCode,
    weatherData.hourly
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={refetch}
            tintColor={COLORS.primary}
          />
        }
      >
        {/* App Title */}
        <Text style={styles.appTitle}>Es Wird Besser</Text>

        {/* Current Weather */}
        <CurrentWeather weather={weatherData.current} />

        {/* Optimism Message */}
        <OptimismMessage message={optimismMessage} />

        {/* Forecast */}
        <ForecastList forecasts={weatherData.hourly} />

        {/* Footer */}
        <Text style={styles.footer}>
          Ziehe nach unten, um zu aktualisieren
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 10,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: COLORS.textLight,
    textAlign: 'center',
  },
  errorEmoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  errorHint: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    fontSize: 13,
    color: COLORS.textLight,
    textAlign: 'center',
    marginTop: 20,
  },
});
