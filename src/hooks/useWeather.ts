// Custom Hook für Wetter-Daten Management

import { useState, useEffect } from 'react';
import { WeatherData } from '../types/weather';
import { getCurrentLocation } from '../services/locationService';
import { getWeatherData } from '../services/weatherService';

interface UseWeatherReturn {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useWeather(): UseWeatherReturn {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);

      // 1. Location ermitteln
      const coords = await getCurrentLocation();

      // 2. Wetterdaten laden
      const data = await getWeatherData(coords);

      setWeatherData(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Ein unbekannter Fehler ist aufgetreten.';
      setError(errorMessage);
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Automatisches Laden beim Start
  useEffect(() => {
    fetchWeather();
  }, []);

  return {
    weatherData,
    loading,
    error,
    refetch: fetchWeather,
  };
}
