// Weather Service - Open-Meteo API Integration

import axios from 'axios';
import { Coordinates, WeatherData, CurrentWeather, HourlyForecast } from '../types/weather';

const OPEN_METEO_API = 'https://api.open-meteo.com/v1/forecast';

interface OpenMeteoResponse {
  current: {
    time: string;
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
    precipitation_probability: number[];
  };
}

export async function getWeatherData(coords: Coordinates): Promise<WeatherData> {
  try {
    const response = await axios.get<OpenMeteoResponse>(OPEN_METEO_API, {
      params: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        current: 'temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m',
        hourly: 'temperature_2m,weather_code,precipitation_probability',
        timezone: 'auto',
        forecast_days: 1,
      },
    });

    const data = response.data;

    // Parse aktuelles Wetter
    const current: CurrentWeather = {
      temperature: Math.round(data.current.temperature_2m),
      weatherCode: data.current.weather_code,
      windSpeed: Math.round(data.current.wind_speed_10m),
      humidity: data.current.relative_humidity_2m,
      time: data.current.time,
    };

    // Parse nächste 6 Stunden Forecast
    const currentHour = new Date().getHours();
    const hourly: HourlyForecast[] = [];

    for (let i = 0; i < 6 && i < data.hourly.time.length; i++) {
      const hourIndex = currentHour + i + 1; // Nächste Stunde starten
      if (hourIndex < data.hourly.time.length) {
        hourly.push({
          time: data.hourly.time[hourIndex],
          temperature: Math.round(data.hourly.temperature_2m[hourIndex]),
          weatherCode: data.hourly.weather_code[hourIndex],
          precipitation: data.hourly.precipitation_probability[hourIndex] || 0,
        });
      }
    }

    return {
      current,
      hourly,
      location: coords,
    };
  } catch (error) {
    console.error('Weather API Error:', error);
    throw new Error('Wetterdaten konnten nicht geladen werden. Aber keine Sorge - es wird trotzdem besser! 🌈');
  }
}
