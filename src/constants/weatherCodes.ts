// WMO Weather Code Mappings
// https://open-meteo.com/en/docs

import { WeatherCondition } from '../types/weather';

export const WMO_CODES: Record<number, { condition: WeatherCondition; description: string; icon: string }> = {
  0: { condition: 'clear', description: 'Klar', icon: 'sunny' },
  1: { condition: 'clear', description: 'Überwiegend klar', icon: 'sunny' },
  2: { condition: 'partly-cloudy', description: 'Teilweise bewölkt', icon: 'partly-sunny' },
  3: { condition: 'cloudy', description: 'Bewölkt', icon: 'cloudy' },
  45: { condition: 'fog', description: 'Nebel', icon: 'cloud' },
  48: { condition: 'fog', description: 'Nebel mit Reifablagerung', icon: 'cloud' },
  51: { condition: 'drizzle', description: 'Leichter Nieselregen', icon: 'rainy' },
  53: { condition: 'drizzle', description: 'Mäßiger Nieselregen', icon: 'rainy' },
  55: { condition: 'drizzle', description: 'Dichter Nieselregen', icon: 'rainy' },
  61: { condition: 'rain', description: 'Leichter Regen', icon: 'rainy' },
  63: { condition: 'rain', description: 'Mäßiger Regen', icon: 'rainy' },
  65: { condition: 'rain', description: 'Starker Regen', icon: 'rainy' },
  71: { condition: 'snow', description: 'Leichter Schneefall', icon: 'snow' },
  73: { condition: 'snow', description: 'Mäßiger Schneefall', icon: 'snow' },
  75: { condition: 'snow', description: 'Starker Schneefall', icon: 'snow' },
  77: { condition: 'snow', description: 'Schneegriesel', icon: 'snow' },
  80: { condition: 'rain', description: 'Leichte Regenschauer', icon: 'rainy' },
  81: { condition: 'rain', description: 'Mäßige Regenschauer', icon: 'rainy' },
  82: { condition: 'rain', description: 'Starke Regenschauer', icon: 'rainy' },
  85: { condition: 'snow', description: 'Leichte Schneeschauer', icon: 'snow' },
  86: { condition: 'snow', description: 'Starke Schneeschauer', icon: 'snow' },
  95: { condition: 'thunderstorm', description: 'Gewitter', icon: 'thunderstorm' },
  96: { condition: 'thunderstorm', description: 'Gewitter mit leichtem Hagel', icon: 'thunderstorm' },
  99: { condition: 'thunderstorm', description: 'Gewitter mit starkem Hagel', icon: 'thunderstorm' },
};

export function getWeatherInfo(code: number) {
  return WMO_CODES[code] || WMO_CODES[0];
}
