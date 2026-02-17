// ⭐ Optimism Engine - Kernlogik für positive Nachrichten

import { WeatherCondition, OptimismMessage, HourlyForecast } from '../types/weather';
import { getWeatherInfo } from '../constants/weatherCodes';

// Mapping: WeatherCondition → Optimistische Nachrichten
const OPTIMISM_MESSAGES: Record<WeatherCondition, OptimismMessage[]> = {
  clear: [
    {
      headline: 'Perfekter Tag!',
      message: 'Die Sonne lädt dich ein, das Leben zu genießen! Nutze die positive Energie!',
      emoji: '☀️',
    },
    {
      headline: 'Strahlendes Wetter!',
      message: 'Herrlicher Sonnenschein! Die perfekte Zeit, um draußen aktiv zu sein!',
      emoji: '🌞',
    },
  ],
  'partly-cloudy': [
    {
      headline: 'Ideal ausbalanciert!',
      message: 'Perfekte Mischung aus Sonne und Wolken - nicht zu heiß, nicht zu kalt!',
      emoji: '⛅',
    },
    {
      headline: 'Angenehm mild!',
      message: 'Die Wolken schützen dich vor zu viel Sonne - perfekt für alle Aktivitäten!',
      emoji: '🌤️',
    },
  ],
  cloudy: [
    {
      headline: 'Angenehm mild!',
      message: 'Keine grelle Sonne - perfekt für einen aktiven Tag ohne Sonnenbrand!',
      emoji: '☁️',
    },
    {
      headline: 'Gemütliches Wetter!',
      message: 'Die Wolken schaffen eine angenehme Atmosphäre - ideal für produktive Stunden!',
      emoji: '☁️',
    },
  ],
  fog: [
    {
      headline: 'Mystische Stimmung!',
      message: 'Der Nebel schafft eine besondere Atmosphäre - genieße die ruhige, besinnliche Zeit!',
      emoji: '🌫️',
    },
    {
      headline: 'Magische Momente!',
      message: 'Nebel macht die Welt geheimnisvoll - perfekt für einen stimmungsvollen Tag!',
      emoji: '🌁',
    },
  ],
  drizzle: [
    {
      headline: 'Sanfte Erfrischung!',
      message: 'Leichter Nieselregen bringt Frische und reinigt die Luft - atme tief durch!',
      emoji: '🌦️',
    },
    {
      headline: 'Natürliche Dusche!',
      message: 'Der sanfte Regen erfrischt die Natur - alles wird grüner und lebendiger!',
      emoji: '💧',
    },
  ],
  rain: [
    {
      headline: 'Frische Luft!',
      message: 'Der Regen reinigt die Luft und bringt neues Leben! Perfekt für die Natur!',
      emoji: '🌧️',
    },
    {
      headline: 'Regeneration!',
      message: 'Regen bedeutet Wachstum - Pflanzen freuen sich, und nach dem Regen kommt die Sonne!',
      emoji: '🌦️',
    },
    {
      headline: 'Gemütliche Zeit!',
      message: 'Perfektes Wetter für eine Tasse Tee, ein gutes Buch oder kreative Projekte drinnen!',
      emoji: '☔',
    },
  ],
  snow: [
    {
      headline: 'Winterzauber!',
      message: 'Schnee verwandelt die Welt in ein Märchenland - genieße die besondere Atmosphäre!',
      emoji: '❄️',
    },
    {
      headline: 'Magisches Weiß!',
      message: 'Schneefall ist ein Geschenk der Natur - alles wird ruhig und friedlich!',
      emoji: '⛄',
    },
  ],
  thunderstorm: [
    {
      headline: 'Natur-Spektakel!',
      message: 'Ein Gewitter ist die Kraft der Natur - beeindruckend und reinigend! Danach wird alles frisch!',
      emoji: '⛈️',
    },
    {
      headline: 'Elektrisierende Energie!',
      message: 'Das Gewitter bringt Spannung und Erneuerung - danach kommt die Ruhe und Frische!',
      emoji: '🌩️',
    },
  ],
};

export function getOptimismMessage(weatherCode: number): OptimismMessage {
  const { condition } = getWeatherInfo(weatherCode);
  const messages = OPTIMISM_MESSAGES[condition];

  // Zufällige Nachricht aus der Kategorie
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return randomMessage;
}

// Praktische Tipps basierend auf Forecast
export function getPracticalTip(currentCode: number, forecast: HourlyForecast[]): string | undefined {
  if (forecast.length === 0) return undefined;

  const currentCondition = getWeatherInfo(currentCode).condition;

  // Prüfe, ob es bald besser wird
  const willGetBetter = checkIfGettingBetter(currentCode, forecast);
  if (willGetBetter) {
    return willGetBetter;
  }

  // Prüfe, ob Regen kommt
  const rainComing = checkRainComing(currentCondition, forecast);
  if (rainComing) {
    return rainComing;
  }

  // Prüfe, ob Regen aufhört
  const rainStopping = checkRainStopping(currentCondition, forecast);
  if (rainStopping) {
    return rainStopping;
  }

  return undefined;
}

function checkIfGettingBetter(currentCode: number, forecast: HourlyForecast[]): string | undefined {
  const currentCondition = getWeatherInfo(currentCode).condition;

  // Wenn aktuell Regen/Gewitter, prüfe ob es aufhört
  if (currentCondition === 'rain' || currentCondition === 'thunderstorm' || currentCondition === 'drizzle') {
    for (let i = 0; i < forecast.length; i++) {
      const futureCondition = getWeatherInfo(forecast[i].weatherCode).condition;
      if (futureCondition === 'clear' || futureCondition === 'partly-cloudy') {
        const hours = i + 1;
        return `✨ Es wird besser! In ${hours}h klart es auf und die Sonne kommt raus!`;
      }
    }
  }

  // Wenn aktuell bewölkt, prüfe ob Sonne kommt
  if (currentCondition === 'cloudy') {
    for (let i = 0; i < forecast.length; i++) {
      const futureCondition = getWeatherInfo(forecast[i].weatherCode).condition;
      if (futureCondition === 'clear' || futureCondition === 'partly-cloudy') {
        const hours = i + 1;
        return `🌤️ Gute Nachrichten! In ${hours}h kommt die Sonne durch!`;
      }
    }
  }

  return undefined;
}

function checkRainComing(currentCondition: WeatherCondition, forecast: HourlyForecast[]): string | undefined {
  if (currentCondition === 'clear' || currentCondition === 'partly-cloudy') {
    for (let i = 0; i < Math.min(3, forecast.length); i++) {
      const futureCondition = getWeatherInfo(forecast[i].weatherCode).condition;
      if (futureCondition === 'rain' || futureCondition === 'drizzle') {
        const hours = i + 1;
        return `☔ Nutze die nächsten ${hours}h gut - dann kommt Regen (aber keine Sorge, danach wird's wieder besser!)`;
      }
    }
  }
  return undefined;
}

function checkRainStopping(currentCondition: WeatherCondition, forecast: HourlyForecast[]): string | undefined {
  if (currentCondition === 'rain' || currentCondition === 'drizzle') {
    for (let i = 0; i < forecast.length; i++) {
      const futureCondition = getWeatherInfo(forecast[i].weatherCode).condition;
      if (futureCondition !== 'rain' && futureCondition !== 'drizzle' && futureCondition !== 'thunderstorm') {
        const hours = i + 1;
        return `🌈 Noch ${hours}h durchhalten - dann wird's trocken!`;
      }
    }
  }
  return undefined;
}

// Vollständige optimistische Nachricht mit Tipp
export function getFullOptimismMessage(weatherCode: number, forecast: HourlyForecast[]): OptimismMessage {
  const baseMessage = getOptimismMessage(weatherCode);
  const tip = getPracticalTip(weatherCode, forecast);

  return {
    ...baseMessage,
    tip,
  };
}
