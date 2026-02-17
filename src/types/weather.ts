// TypeScript Interfaces für Wetter-Daten

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface CurrentWeather {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
  humidity: number;
  time: string;
}

export interface HourlyForecast {
  time: string;
  temperature: number;
  weatherCode: number;
  precipitation: number; // Regenwahrscheinlichkeit in %
}

export interface WeatherData {
  current: CurrentWeather;
  hourly: HourlyForecast[];
  location: Coordinates;
}

export interface OptimismMessage {
  headline: string;
  message: string;
  emoji: string;
  tip?: string; // Praktischer Tipp (optional)
}

export type WeatherCondition =
  | 'clear'
  | 'partly-cloudy'
  | 'cloudy'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'snow'
  | 'thunderstorm';
